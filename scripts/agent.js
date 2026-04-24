import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const agent = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash",
  systemInstruction: "You answer history questions clearly and concisely.",
});

try {
  const result = await agent.generateContent(
    "When did Pakistan become independent?"
  );
  console.log(result.response.text());
} catch (error) {
  if (error.status === 429) {
    console.error(
      "❌ Quota limit exceeded on free tier. Please wait a minute before retrying."
    );
    console.error(
      "💡 Tip: Upgrade to a paid plan at https://ai.google.dev/pricing for higher limits."
    );
  } else {
    console.error("Error:", error.message);
  }
  process.exit(1);
}
