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

  printMoney(currency) {
    if (currency === 'Dollar') {
      // print Dollar
    } else {
      // print Euro
    }    
  }
}