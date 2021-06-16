import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "flipCard" ]

  connect() {
    console.log('FlipCardController connected!');
  }

  flip = () => {
    this.flipCardTarget.classList.toggle('flipped');
  }
}
