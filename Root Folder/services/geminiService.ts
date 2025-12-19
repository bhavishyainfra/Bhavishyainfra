
import { GoogleGenAI, Type } from "@google/genai";
import { EstimationResult } from "../types";

export const getProjectConsultation = async (prompt: string): Promise<EstimationResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey || apiKey === 'undefined') {
    throw new Error("AI_NOT_CONFIGURED");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert construction project consultant. A user wants to build something and has provided the following description: "${prompt}". 
      Analyze the requirements and provide a professional consultation including a summary, suggested materials, estimated timeline, and potential challenges.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "Executive summary of the project consultation." },
            suggestedMaterials: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of materials needed."
            },
            estimatedTimeline: { type: Type.STRING, description: "A realistic timeline estimate." },
            potentialChallenges: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Key risks and challenges to consider."
            }
          },
          required: ["summary", "suggestedMaterials", "estimatedTimeline", "potentialChallenges"]
        }
      }
    });

    const text = response.text || "{}";
    return JSON.parse(text) as EstimationResult;
  } catch (error) {
    console.error("Gemini AI error:", error);
    throw new Error("Failed to generate consultation. Please check your connection.");
  }
};
