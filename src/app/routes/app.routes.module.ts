import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from '../components/products/product-list/product-list.component';
import { ProductDetailComponent } from '../components/products/product-detail/product-detail.component';
import { WelcomeComponent } from '../components/home/welcome/welcome.component';

const appRoutes: Routes = [
		{ path: 'products', component: ProductListComponent },
		{ path: 'products/:id', component: ProductDetailComponent },
		{ path: 'welcome', component: WelcomeComponent },
		{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
		{ path: '**', component: WelcomeComponent }
	];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutesModule {
}
