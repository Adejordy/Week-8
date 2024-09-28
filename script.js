class FlowerOrder {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
  describe() {
    return `I want this ${this.type} for and order of ${this.amount}`;
  }
}
class Menu {
  //This class calls the menu
  constructor() {
    this.order = [];
  }
  start() {
    //Method to start the menu
    let selection = this.showFlowerOrderOptions();
    while (selection != 0)
      switch (selection) {
        case "1":
          this.placeOrder();
          break;
        case "2":
          this.viewOrder();
          break;
        case "3":
          this.deleteOrder();
          break;
        default:
          selection = 0;
      }
    selection = this.showFlowerOrderOptions();
  }
}
