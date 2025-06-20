import { modals } from "/src/modals/index.ts.js";
export class ModalService {
  /**
   * The currently active modal.
   * @private
   */
  activeModal = null;
  /**
   * Selects a modal by its name and initializes it with an optional API key.
   * @param modalName - The name of the modal to select.
   * @param apiKey - An optional API key to initialize the modal with.
   * @throws Will throw an error if the modal with the given name is not found.
   */
  selectModal(modalName, apiKey) {
    if (modals[modalName]) {
      this.activeModal = modals[modalName];
      this.activeModal.init(apiKey);
    } else {
      throw new Error(`Modal "${modalName}" not found`);
    }
  }
  /**
   * Generates a response using the currently active modal.
   * @param props - The parameters required to generate the response.
   * @returns A promise that resolves to an object containing either an error or the successful response.
   * @throws Will throw an error if no modal is selected.
   */
  async generate(props) {
    if (!this.activeModal) {
      throw new Error("No modal selected");
    }
    return this.activeModal.generateResponse(props);
  }
}
