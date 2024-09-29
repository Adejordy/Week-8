//class flower order
class FlowerOrder {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
}
//class menu
class Menu {
  constructor() {
    this.orders = []; //order array
  }
  //Menu prompt, to make main menu visible
  showFlowerOrdersMenu() {
    return prompt(`
      Selection:
      ------------
      1) Place Order
      2) Delete Order
      3) View Order
      `);
  }
  placeOrder() {
    //method to place order, prompt for flower, promt for amount
    let flowerType = prompt("Enter Flower Type:");
    let flowerAmount = prompt("Enter How Many you would like:");
    this.orders.push(new FlowerOrder(flowerType, flowerAmount)); //Adding the order to the array with the push method
  }
  deleteOrder() {
    //Delete order prompt to enter which index to delete
    let orderIndex = prompt("Which Order Would You Like to Delete?");
    this.orders.splice(orderIndex, 1); //splice method to delete
  }
  ViewOrder() {
    //veiw order created variable and then looped through the lenght of the array, and then display the variable
    let displayOrders = " ";
    for (let i = 0; i < this.orders.length; i++) {
      displayOrders += i + this.orders[i].length;
    }
    alert(displayOrders);
  }
  start() {
    //start menu created new variable selections, made list match menu prompt, create switch case add the while loop to stop if option outside loop is pick it will exit menu.
    let selection = this.showFlowerOrdersMenu();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.placeOrder();
          break;
        case "2":
          this.deleteOrder();
          break;
        case "3":
          this.ViewOrder();
          break;
        default:
          selection = 0;
      }
      alert("Thank you!");
    }
  }
}

let menu = new Menu();
menu.start(); //calling the start because it holds the options
