import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

export async function POST(request: Request) {
  const body = await request.json();
  const { answers } = body;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: `사용자 정보: 나이대 ${answers.age}, 성별 ${answers.gender}, 선호1: ${answers.preference1}, 선호2: ${answers.preference2}, 선호3: ${answers.preference3}. 이 사용자에게 어울리는 모임을 추천해주세요.`,
      },
    ],
  });
  console.log(response.choices[0].message.content);

  return Response.json({
    message: response.choices[0].message.content,
  });
}
