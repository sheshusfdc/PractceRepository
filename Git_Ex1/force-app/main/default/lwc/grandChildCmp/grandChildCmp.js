import { api, LightningElement } from "lwc";

export default class GrandChildCmp extends LightningElement {
  @api messageReceived;
  messageSend;

  handleGrandChildSubmit() {
    this.messageSend = "From Grand Child Component";
    this.dispatchEvent(
      new CustomEvent("grandchildevent", {
        detail: this.messageSend,
        bubbles: true,
        composed: true
      })
    );
  }
}