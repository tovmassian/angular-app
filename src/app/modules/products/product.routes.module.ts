import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductDetailGuard } from './components/product-detail/guard/product-detail.guard';

const productRoutes: Routes = [
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
];

@NgModule({
	imports: [
		RouterModule.forChild(productRoutes)
	],
	exports: [RouterModule],
	declarations: []
})
export class ProductRoutesModule {
}
