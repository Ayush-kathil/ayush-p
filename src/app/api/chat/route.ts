import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 });
  }

  try {
    const { message, history } = await req.json();
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const systemContext = `You are a helpful AI assistant for Ayush Gupta's portfolio website. 
    Ayush is an Aspiring Software Engineer & AI Enthusiast, 2nd year B.Tech Student (AI & ML) at VIT Bhopal.
    Skilled in Python, ML, Data Structures. Projects: 'Cyberia', 'Yoga Pose Detection', 'Grade Calc'.
    Keep answers concise, professional, and related to his portfolio.`;

    // Prepend system context to the last user message for simpler stateless-like behavior improvement
    // or rely on the model to understand context from history if we were using systemInstruction properly.
    // For "gemini-pro" (older version maybe), we just prepend to the prompt.
    
    // Convert frontend history to Gemini format if needed, but here we simplify:
    const chat = model.startChat({
      history: history || [],
    });

    // If it's the start, we might want to just send the message with context
    let promptToSend = message;
    if (!history || history.length === 0) {
        promptToSend = `${systemContext}\n\nUser Question: ${message}`;
    }

    const result = await chat.sendMessage(promptToSend);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });

  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json({ error: "Failed to generate response", details: error.message }, { status: 500 });
  }
}
