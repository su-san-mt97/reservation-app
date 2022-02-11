import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product :any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductById(params.get('productId')!)
      const productOvservable = this.productService.getProductById(params.get('productId')!)
      productOvservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {
          console.error('次のエラーが発生しました: ' + err)
        }
      )
    })
  }

}
