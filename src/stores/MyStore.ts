import { action, computed, makeObservable, observable } from "mobx";

export interface ICartItem {
  productId: string;
  quantity: number;
}

class MyStore {
  public constructor() {
    makeObservable(this);
  }
}

export default new MyStore();
