import { OpenAI_3_5_turbo } from "/src/modals/modal/OpenAI_3_5_turbo.ts.js";
import { GeminiAI_1_5_pro } from "/src/modals/modal/GeminiAI_1_5_pro.ts.js";
import { OpenAi_4o } from "/src/modals/modal/OpenAI_40.ts.js";
export const modals = {
  "openai_3.5_turbo": new OpenAI_3_5_turbo(),
  openai_4o: new OpenAi_4o(),
  "gemini_1.5_pro": new GeminiAI_1_5_pro()
};
