import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

//Reactta axios,fetch kullanılıyor
//HttpClient ile apiye ulaşıyoruz
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // productResponseModel: ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true
  // };
  products: Product[] = [];
  dataLoaded = false;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  //ActivatedRoute dışarıdan gelen bir parametreyi almak için kullanılıyor.
  ngOnInit(): void {
    // console.log('Init çalıştı');
    // this.getProducts();
    // .subscribe((response) => {
    //   this.products = response.data;
    // });
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"]);
      }else
      {
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  getProductsByCategoryId(categoryId:number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

}
