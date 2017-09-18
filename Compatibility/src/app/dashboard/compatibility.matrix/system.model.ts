import { Product } from './Product.model';

export class System {
  Id: number;
  Name: string;
  lstProducts:  Product[];

  constructor(id:number, name:string, lstProducts:Product[]){
    this.Id = id,
    this.Name = name,
    this.lstProducts = lstProducts;
  }
}
