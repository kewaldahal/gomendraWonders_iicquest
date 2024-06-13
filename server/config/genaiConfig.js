// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// export default async function generateText(promptt) {
//     const prompt = `(Give Reply in two paragraphs including important and key points)${promptt}`;
  
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     return text;
//   }
  
import axios from 'axios';

export default async function generateText(promptt) {

  const options = {
    method: 'POST',
    url: 'https://chat-gpt26.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': process.env.RAPID_KEY,
      'x-rapidapi-host': process.env.RAPID_HOST,
      'Content-Type': 'application/json'
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: promptt
        }
      ]
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    // return response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
}