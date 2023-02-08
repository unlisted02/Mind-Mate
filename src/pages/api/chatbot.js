import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { gender, age, problem } = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(gender, age, problem),
    temperature: 0.6,
    max_tokens: 2048,
  });

  res.status(200).json({
    result: completion.data.choices[0].text,
  });

  function generatePrompt(gender, age, problem) {
    return `I am ${age} years old ${gender}. give me mental health solution for "${problem}".`;
  }
}
