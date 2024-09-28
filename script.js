//Flower order Menu

//class flower order
class FlowerOrder {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
  describe() {
    return `I want ${this.type} and I want ${this.amount} of them`;
  }
}
//class menu
class Menu {
  constructor() {
    this.orders = []; //order array
  }
  //see menu create menu prompt   //make main menu, make visible with a prompt
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
    //place order
    //promt for flower
    let flowerType = prompt("Enter Flower Type:");
    //promt for amount
    let flowerAmount = prompt("Enter How Many you would like:");
    this.orders.push(new FlowerOrder(flowerType, flowerAmount));
  }
}

//push created car into array

//delete order
//create orderIndex and prompt to enter which index to delete, find method to delete

//veiw order
//create variable and then loop through the lenght of the array, and then display the variable, create alert

//start menu
//create new variable selections, list is equal to mainmenu, create switch case add the while != 0

let order1 = new FlowerOrder("Roses", "12");
console.log(order1);
let menu = new Menu();
menu.placeOrder();
//call all after creating
