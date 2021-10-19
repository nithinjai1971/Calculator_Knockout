function Calculator() {
  this.outputValue = ko.observable("0");

  // Numbers
  this.clickOne = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("1")
      : this.outputValue(currValue + "1");
  };
  this.clickTwo = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("2")
      : this.outputValue(currValue + "2");
  };
  this.clickThree = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("3")
      : this.outputValue(currValue + "3");
  };
  this.clickFour = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("4")
      : this.outputValue(currValue + "4");
  };
  this.clickFive = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("5")
      : this.outputValue(currValue + "5");
  };
  this.clickSix = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("6")
      : this.outputValue(currValue + "6");
  };
  this.clickSeven = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("7")
      : this.outputValue(currValue + "7");
  };
  this.clickEight = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("8")
      : this.outputValue(currValue + "8");
  };
  this.clickNine = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("9")
      : this.outputValue(currValue + "9");
  };
  this.clickZero = function () {
    let currValue = this.outputValue();
    currValue === "0"
      ? this.outputValue("0")
      : this.outputValue(currValue + "0");
  };
  this.clickDot = function () {
    let currValue = this.outputValue();
    this.outputValue(currValue + ".");
  };

  // Operators
  this.clickAdd = function () {
    let currValue = this.outputValue();
    this.checkOperator() && this.outputValue(currValue + "+");
  };
  this.clickSub = function () {
    let currValue = this.outputValue();
    this.checkOperator() && this.outputValue(currValue + "-");
  };
  this.clickMul = function () {
    let currValue = this.outputValue();
    this.checkOperator() && this.outputValue(currValue + "*");
  };
  this.clickDiv = function () {
    let currValue = this.outputValue();
    this.checkOperator() && this.outputValue(currValue + "/");
  };
  this.clickMod = function () {
    let currValue = this.outputValue();
    this.checkOperator() && this.outputValue(currValue + "%");
  };

  // Actions
  this.clickC = function () {
    this.outputValue("0");
  };
  this.clickSubmit = function () {
    let currValue = this.outputValue();
    this.outputValue(eval(currValue));
  };
  this.clickEqual = function () {
    let currValue = this.outputValue();
    this.outputValue(eval(currValue));
  };
  this.clickDel = function () {
    let currValue = this.outputValue();
    this.outputValue(currValue.substring(0, currValue.length - 1));
  };
  this.clickReset = function () {
    this.outputValue("0");
  };

  this.checkOperator = function () {
    let currValue = this.outputValue();
    let lastChar = currValue.charAt(currValue.length - 1);
    if (
      lastChar == "+" ||
      lastChar == "-" ||
      lastChar == "*" ||
      lastChar == "/" ||
      lastChar == "%"
    ) {
      return false;
    } else return true;
  };
}

ko.applyBindings(new Calculator());
