import { Component, OnInit } from '@angular/core';
import * as interfaces from '../../../../models/interfaces/index';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
	selector: 'pm-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Details';
	product: interfaces.IProduct;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productService: ProductService,
	) {
	}

	ngOnInit() {
		const productIdParam = +this.route.snapshot.paramMap.get('id');
		this.productService.getProductById(productIdParam).subscribe(
			(product: interfaces.IProduct): void => {
				this.product = product;
			},
			(error): void => {
				console.log(error);
			}
		);
	}

	onBack(): void {
		this.router.navigate(['products']);
	}
}
