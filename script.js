class Flowers {
  constructor(type, cost, amount) {
    this.type = type;
    this.cost = cost;
    this.amount = amount;
  }
  decribe() {
    return `This ${this.type} cost ${this.cost} for ${this.amount}`;
  }
}

class Cards {
  constructor(occasion) {
    this.occasion = occasion;
  }
  describe() {
    return `Add ${this.occasion} to the flower order`;
  }
}
