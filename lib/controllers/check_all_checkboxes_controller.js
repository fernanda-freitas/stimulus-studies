import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "checkboxmain"]

  checkAll() {
    if (this.checkboxmainTarget.checked == true) {
      this.checkboxTargets.forEach((checkbox) => {
        checkbox.setAttribute("checked", "")
      });
    } else {
      this.checkboxTargets.forEach((checkbox) => {
        checkbox.removeAttribute("checked", "")
      });
    }
  }
}
