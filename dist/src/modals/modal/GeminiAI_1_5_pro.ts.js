import { createGoogleGenerativeAI } from "/vendor/.vite-deps-@ai-sdk_google.js__v--58822b58.js";
import { generateObjectResponce } from "/src/modals/utils.ts.js";
import { VALID_MODELS } from "/src/constants/valid_modals.ts.js";
export class GeminiAI_1_5_pro {
  name = "gemini_1.5_pro";
  apiKey = "";
  init(apiKey) {
    this.apiKey = apiKey;
  }
  async generateResponse(props) {
    try {
      const google = createGoogleGenerativeAI({
        apiKey: this.apiKey
      });
      let data = await generateObjectResponce({
        model: google(
          VALID_MODELS.find((model) => model.name === this.name)?.model
        ),
        messages: props.messages,
        systemPrompt: props.systemPrompt,
        prompt: props.prompt,
        extractedCode: props.extractedCode
      });
      return {
        error: null,
        success: data.object
      };
    } catch (error) {
      return { error, success: null };
    }
  }
}
