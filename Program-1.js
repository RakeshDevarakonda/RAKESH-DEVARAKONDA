class SmallCalculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase();
  }

  calculatefunction() {
    switch (this.operation) {
      case "addition":
        return this.a + this.b;
      case "subtraction":
        return this.a - this.b;
      case "multiplication":
        return this.a * this.b;
      case "division":
        if (this.b === 0) {
          return "Error: Division by zero";
        }
        return this.a / this.b;
      default:
        return "Error: Invalid operation";
    }
  }
}

const a = 12;
const b = 12;
const operation = "Division";

const answer = new SmallCalculator(a, b, operation);
console.log(answer.calculatefunction());
