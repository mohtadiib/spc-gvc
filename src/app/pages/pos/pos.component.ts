import { Component } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent {

  constructor() {
    // this.db = null as any
    this.time = null as any
    // this.initDatabase()
  }
  // db: { addProduct: (product: any) => Promise<number | string | Date | ArrayBufferView | ArrayBuffer | IDBValidKey[]>; getProducts: () => Promise<StoreValue<unknown, string>[]>; deleteProduct: (product: any) => Promise<void>; db: IDBPDatabase<unknown>; editProduct: (product: any) => Promise<number | string | Date | ArrayBufferView | ArrayBuffer | IDBValidKey[]> }
  time: Date
  firstTime: boolean = true
  activeMenu: string = 'pos'
  loadingSampleData: boolean = false
  moneys: number[] = [2000, 5000, 10000, 20000, 50000, 100000]
  products: any[] = []
  keyword: string = ""
  cart: any[] = []
  discount: number = 0
  total: number = 0
  isShowModalReceipt: boolean = false
  receiptNo: string = ""
  receiptDate: string = ""
  // async initDatabase() {
  //   this.db = await loadDatabase();
  //   this.loadProducts();
  // }
  // async loadProducts() {
  //   this.products = await this.db.getProducts();
  //   console.log("products loaded", this.products);
  // }
  // async startWithSampleData() {
  //   const response = await fetch("../assets/data/sample.json");
  //   const data = await response.json();
  //   this.products = data.products;
  //   for (let product of data.products) {
  //     await this.db.addProduct(product);
  //   }
  //   //
  //   this.setFirstTime(false);
  //   console.log(this.products)
  // }
  startBlank() {
    this.setFirstTime(false);
  }
  setFirstTime(firstTime:any) {
    this.firstTime = firstTime;
    if (firstTime) {
      localStorage.removeItem("first_time");
    } else {
      localStorage.setItem("first_time", String(new Date().getTime()));
    }
  }
  filteredProducts() {
    const rg = this.keyword ? new RegExp(this.keyword, "gi") : null;
    return this.products.filter((p) => !rg || p.name.match(rg));
  }
  addToCart(product:any) {
    const index = this.findCartIndex(product);
    if (index === -1) {
      this.cart.push({
        productId: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        option: product.option,
        qty: 1,
      });
    } else {
      this.cart[index].qty += 1;
    }
    this.beep();
  }
  findCartIndex(product:any) {
    return this.cart.findIndex((p) => p.productId === product.id);
  }
  addQty(item:any, qty:any) {
    const index = this.cart.findIndex((i) => i.productId === item.productId);
    if (index === -1) {
      return;
    }
    const afterAdd = item.qty + qty;
    if (afterAdd === 0) {
      this.cart.splice(index, 1);
      this.clearSound();
    } else {
      this.cart[index].qty = afterAdd;
      this.beep();
    }
  }
  addCash(amount:any) {
    this.discount = (this.discount || 0) + amount;
    this.beep();
  }
  getItemsCount() {
    return this.cart.reduce((count, item) => count + item.qty, 0);
  }
  getTotal() {
    return this.priceFormat( this.getTotalPrice() -  this.discount) ;
  }

  updateDiscount() {
    // const value = e.target
    console.log("value");
    // this.discount = parseFloat(value.replace(/[^0-9]+/g, ""));
    // this.updateTotal();
  }
  getTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
  }
  submitable() {
    return this.total >= 0 && this.cart.length > 0;
  }
  submit() {
    const time = new Date();
    this.isShowModalReceipt = true;
    this.receiptNo = `TWPOS-KS-${Math.round(time.getTime() / 1000)}`;
    this.receiptDate = this.dateFormat(time);
  }
  closeModalReceipt() {
    this.isShowModalReceipt = false;
  }
  dateFormat(date:Date) {
    const formatter = new Intl.DateTimeFormat('id', { dateStyle: 'short', timeStyle: 'short'});
    return formatter.format(date);
  }
  numberFormat(number:number) {
    return (number || "")
      .toString()
      .replace(/^0|\./g, "")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  priceFormat(number:number) {
    return number ? ` ${this.numberFormat(number)} جنيه ` : ``;
  }
  clear() {
    this.discount = 0;
    this.cart = [];
    this.receiptNo = "";
    this.receiptDate = "";
    this.clearSound();
  }
  beep() {
    this.playSound("../assets/sound/beep-29.mp3");
  }
  clearSound() {
    this.playSound("../assets/sound/button-21.mp3");
  }
  playSound(src:any) {
    const sound = new Audio();
    sound.src = src;
    sound.play();
    // @ts-ignore
    // sound.onended = () => delete(sound);
  }

  printAndProceed() {
    const receiptContent = document.getElementById('receipt-content');
    const titleBefore = document.title;
    const printArea = document.getElementById('print-area');
    if (printArea === null) {
      return
    }
    if (receiptContent === null) {
      return
    }
    printArea.innerHTML = receiptContent.innerHTML;
    document.title = this.receiptNo;

    window.print();
    this.isShowModalReceipt = false;

    printArea.innerHTML = '';
    document.title = titleBefore;

    // TODO save sale data to database

    this.clear();
  }

}
