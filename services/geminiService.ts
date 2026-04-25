
import { GoogleGenAI } from "@google/genai";

// Initialize with process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIConsultation = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the Koi Build AI Consultant. Your goal is to help potential clients understand the value of our construction services.
        We offer two main paths:
        1. Owner Builder Consulting: Help clients manage their own projects for a flat fee.
        2. Flat-Fee General Contracting: A traditional "we build it for you" experience but with a fixed flat fee instead of the standard 15-25% contractor markup that leads to cost bloating.
        
        Focus on:
        - Explaining why flat-fee models are better for the client's wallet (no incentives to spend more).
        - Identifying how we handle kitchens, bathrooms, additions, ADUs, and DADUs.
        - Encouraging them to book a discovery call.
        Keep responses professional, concise, and focused on construction consulting and flat-fee management. 
        Always mention that Koi Build offers expert guidance to save them significantly compared to traditional percentage-based GCs.`,
        temperature: 0.7,
      },
    });

    // Access .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please reach out via our contact form for immediate assistance!";
  }
};
