import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../shared/services/httpservices';
import {System } from './system.model';
import {Product} from './product.model';

@Component({
  templateUrl: './compatibility.matrix.component.html'
})

export class CompatibilityMatrixComponent implements OnInit {
  variantreatmentDeliverySystems: System[];
  nonVarianTreatmentDeliverySystems: System[];
  allSystems: System[];
  lstSystems: System[];
  selectedProductList:Product[];
  caruselSize: number;
  nonVarianSelected: boolean = false;

  constructor(private systemDataService: PostsService) {
    this.selectedProductList = [];
    this.caruselSize = 6;
          this.systemDataService.getSystems().subscribe(posts => {
            this.allSystems = posts;
            let filteredSystems = [];
            this.nonVarianTreatmentDeliverySystems = [];
            this.variantreatmentDeliverySystems = [];
            for( var i = 0; i < this.allSystems.length; i++ ){
              let varianProductList = [], nonVarianProductList = [];
              for( var j = 0; j < this.allSystems[i].lstProducts.length; j++){
                if( this.allSystems[i].lstProducts[j].Type === "Varian" ){
                  varianProductList.push(this.allSystems[i].lstProducts[j]);
                }
                else{
                  nonVarianProductList.push(this.allSystems[i].lstProducts[j]);
                }
              }
              if( varianProductList.length > 0 ){
                let sys = new System(this.allSystems[i].Id, this.allSystems[i].Name, varianProductList);
                this.variantreatmentDeliverySystems.push(sys);
              }
              if( nonVarianProductList.length > 0 ){
                let sys = new System(this.allSystems[i].Id, this.allSystems[i].Name, nonVarianProductList);
                this.nonVarianTreatmentDeliverySystems.push(sys);
              }
            }
            this.lstSystems = this.variantreatmentDeliverySystems;
          });
  }
  ngOnInit() {
  }
  getBatchCount(count) {
    let split = Math.ceil(count/this.caruselSize);
     var items: number[] = [];
     for(var i = 1; i <= split; i++){
        items.push(i);
     }
     return items;
  }

  getProductsInRange(lstProducts,range):Product[] {
    let items: Product[] = [];
    for(let i = range * this.caruselSize; i < (range * this.caruselSize) + this.caruselSize; i++) {
      if(i < lstProducts.length)
      items.push(lstProducts[i]);
    }
  return items;
  }
  nonVarianSelectedClick(){
      this.lstSystems = this.nonVarianTreatmentDeliverySystems;
  }
  varianSelectedClick()
  {
    this.lstSystems = this.variantreatmentDeliverySystems;
  }

  productSelected(event, product:Product){
    this.selectedProductList.push(product);
    if(product.SelectedCount===undefined){product.SelectedCount=1;}
     // tslint:disable-next-line:one-line
     else {product.SelectedCount++; }

  }

  getSystems()
  {
    return (this.nonVarianSelected) ? this.nonVarianTreatmentDeliverySystems : this.variantreatmentDeliverySystems;
  }

}
