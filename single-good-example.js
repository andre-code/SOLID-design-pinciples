class Wallet {
  constructor(money, brand) {
    this.m_Money = money;
    this.m_Brand = brand;
  }
  getBrand() {
      return this.m_Brand;
  }

  getMoney() {
      return this.m_Money;
  }

  /**
   * @param {string} brand
   */
  set m_Brand(brand) {
      this.m_Brand = brand;
  }

  /**
   * @param {decimal} money
   */
  set m_Money(money)
  {
      this.m_Money = money;
  }
}

class Printer {
  printMoney(money) {
    // print money
  }
}

class DollarPrinter extends Printer {
  printMoney(money) {
    // print Dollar
  }
}
class EuroPrinter extends Printer {
  printMoney(money) {
    // print euro
  }
}