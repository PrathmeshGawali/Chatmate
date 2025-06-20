import { createOpenAI } from "/vendor/.vite-deps-@ai-sdk_openai.js__v--58822b58.js";
import { generateObjectResponce } from "/src/modals/utils.ts.js";
import { VALID_MODELS } from "/src/constants/valid_modals.ts.js";
export class OpenAi_4o {
  name = "openai_4o";
  apiKey = "";
  init(apiKey) {
    this.apiKey = apiKey;
  }
  async generateResponse(props) {
    try {
      const openai = createOpenAI({
        compatibility: "strict",
        apiKey: this.apiKey
      });
      let data = await generateObjectResponce({
        model: openai(
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
