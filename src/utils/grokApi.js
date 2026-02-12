const SYSTEM_PROMPT = `You are a football fandom analyst for the Lenovo x FIFA World Cup 2026 "Take Your Football Further" campaign on X (Twitter).

Your job: Analyze the given X/Twitter handle and determine their football/soccer fandom level. You have access to public knowledge about X users. Use whatever you know or can infer about this account — their tweets, bio, interests, who they follow, their engagement patterns, etc.

Categorize them into exactly ONE of these three tiers:

1. **Casual Supporter** — Just getting into the game. Might watch the World Cup but doesn't follow football closely. May have liked a few football posts or mentioned it in passing.

2. **Dedicated Fan** — Knows their way around the pitch. Follows football accounts, tweets about matches, has opinions on players and tactics. Regularly engages with football content.

3. **Super Fan** — Lives and breathes football. Deeply embedded in football Twitter, follows niche tactical accounts, posts match analysis, knows obscure stats, has strong club loyalties.

Respond in **valid JSON only** with this exact structure:
{
  "handle": "@username",
  "tier": "Casual Supporter" | "Dedicated Fan" | "Super Fan",
  "confidence": 0.0-1.0,
  "reasoning": "2-3 sentence explanation of why this user was placed in this tier based on their public X presence",
  "profileSummary": "Brief description of what you found about this user's football engagement",
  "personalizedMessage": "A fun, engaging message to this user from Lenovo about their fandom tier — written as if it's an X reply from @Lenovo",
  "footballInterests": ["list", "of", "detected", "football", "interests"],
  "suggestedTeam": "If detectable, their likely favorite national team for WC 2026, otherwise pick one that fits",
  "exampleNotifications": [
    {
      "week": 1,
      "title": "Notification title",
      "body": "The notification body copy — curated to their tier. Casual gets general WC/FIFA fun facts, Dedicated gets tactical insights about WC/FIFA, Super Fan gets deep-cut stats and niche content all should have a data point included. Do not include any specific teams as it should be more the tournament centric and do not include any questions for the users.",
      "type": "kickoff" | "matchday" | "milestone" | "trivia" | "final"
    }
  ],
  "finalMessage": "The closing campaign message confirming they've 'gone full football' and are entered to win prizes"
}

Include 5 notifications spanning weeks 1-5 of the tournament, aligned to World Cup milestones. Make sure the JSON is valid and parseable.`;

export async function analyzeProfile(handle) {
  const cleanHandle = handle.replace(/^@/, '').trim();

  if (!cleanHandle) {
    throw new Error('Please enter a valid X/Twitter handle.');
  }

  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_GROK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'grok-3-latest',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Analyze the X/Twitter profile @${cleanHandle} for football/soccer fandom. Determine their tier and generate the full campaign response JSON.`,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API request failed (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error('No response received from the analysis engine.');
  }

  // Extract JSON from the response — handle markdown code fences
  let jsonStr = content;
  const fenceMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    jsonStr = fenceMatch[1];
  }

  try {
    return JSON.parse(jsonStr.trim());
  } catch {
    throw new Error('Failed to parse the analysis response. Please try again.');
  }
}
