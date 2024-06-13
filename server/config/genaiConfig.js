import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default async function generateText(promptt) {
    const prompt = `(Give Reply in two paragraphs including important and key points)${promptt}`;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
  