export class Keg {
  public pints: number = 124;
  constructor(public name: string, public ABV: number, public price: number, public id: number) {
}
  fullPercent() {
    return (this.pints/124) * 100;
  }

  sellPint() {
    if(this.pints > 0){
      this.pints--;
    }
  }
}
