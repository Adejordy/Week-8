class Flowers {
  constructor(type, cost) {
    this.type = type;
    this.cost = cost;
  }
  decribe() {
    return `This ${this.type} will cost ${this.cost}`; //This is the return message for the ordered flowers
  }
  addOrder(flower) {
    if (flower instanceof Flowers) {
      this.flower.push(flower);
    }
  }
}
//I created a class for flowers to order by amount, flower type, and cost,
class Menu {
  //This class calls the menu
  constructor() {
    this.flowers = [];
  }
  start() {
    let selection = this.showFlowerOrderOptions();
    while (selection != 0)
      switch (selection) {
        case "1":
          this.placeOrder();
          break;
        case "2":
          this.addNote();
          break;
        case "3":
          this.viewOrder();
          break;
        case "4":
          this.deleteOrder();
        default:
          selection = 0;
      }
    selection = this.showFlowerOrderOptions();
  }
  showFlowerOrderOptions(orderInfo) {
    return prompt(`
      1) Place Order
      2) Add Note
      3) View Order
      4)Delete Order
      ---------------
      ${orderInfo}
      `);
  }
  displayFlowers() {
    let flowerString = "";
    for (let i = 1; i < this.flowers.length; i++) {
      flowerString += i + ") " + this.flowers[i];
    }
    alert(flowerString);
  }
  placeOrder() {
    let order = promt("Enter Flower Order: ");
    this.flowers.push(new Flowers(type));
  }
  viewFlower() {
    let index = promt("Enter order placed you wish to view:");
    if (index > 0 && index < this.flowers.length) {
      this.selectedOrder = this.order[index];
      let describe = "The order placed: " + this.selectedOrder.name;
      for (let i = 0; i < this.selectedOrder.name.lenght; i++);
      {
        description +
          i +
          ") " +
          this.selectedOrder.amount +
          this.selectedOrder.type +
          this.selectedOrder.amount;
      }
      let selection = this.showFlowerOrderOptions(description);
      switch (selection) {
        case "1":
          this.displayOrder();
          break;
        case "2":
          this.deleteOrder();
      }
    }
  }
}
let menu = new Menu();
menu.start();
