class Flowers {
  constructor(amount, type, cost) {
    this.amount = amount;
    this.type = type;
    this.cost = cost;
  }
  decribe() {
    return `a ${this.amount} ${this.type} will cost ${this.cost}`;
  }
}
//I created a class for flowers to order by amount, flower type, and cost,
class Cards {
  constructor(occasion) {
    this.occasion = occasion;
  }
  describe() {
    return `Add ${this.occasion} to the flower order`;
  }
}
//I created a class to add cards to the order by occasion
class Menu {
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
          this.addCard();
          break;
        case "3":
          this.viewOrder();
          break;
        case "4":
          this.deleteOrder();
      }
    selection = showFlowerOrderOptions();
  }
  showFlowerOrderOptions() {
    return prompt(`
      1) Place Order
      2) Add Card
      3) View Order
      4)Delete Order
      `);
  }
  displayOrder() {
    let orderString = "";
    for (let i = 0; i < this.flowers.length; i++) {
      orderString += i + ") " + this.flowers[i].type;
    }
    alert(orderString);
  }
  createOrder() {
    let order = promt("Enter Flower Order");
    this.flowers.push(new Flowers(order));
  }
  viewOrder() {
    let index = promt("Enter order placed you wish to view:");
    if (index > -1 && index < this.flowers.length) {
      this.selectedOrder = this.orders[index];
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
