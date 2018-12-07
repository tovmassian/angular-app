import { Component, OnInit } from '@angular/core';
import * as interfaces from '../../models/interfaces/index';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	showImage: boolean = true;
	imageWidth: number = 20;
	imageMargin: number = 2;
	filteredProducts: interfaces.IProduct[];
	products: interfaces.IProduct[];

	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	constructor(private productService: ProductService) {
	}

	ngOnInit(): void {
		this.products = this.productService.getProducts();
		this.filteredProducts = this.products;
	}

	performFilter(filterBy: string): interfaces.IProduct[] {
		return this.products.filter((product: interfaces.IProduct) => product.productName.toLowerCase().search(filterBy.toLowerCase()) !== -1 );
	}

	OnRatingClicked(message: string): void {
		alert(message);
	}
}
