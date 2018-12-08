import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from '../modules/products/components/product-list/product-list.component';
import { ProductDetailComponent } from '../modules/products/components/product-detail/product-detail.component';
import { WelcomeComponent } from '../modules/home/components/welcome/welcome.component';

import { ProductDetailGuard } from '../modules/products/components/product-detail/guard/product-detail.guard';

const appRoutes: Routes = [
		{ path: 'products', component: ProductListComponent },
		{ path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
		{ path: 'welcome', component: WelcomeComponent },
		{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
		{ path: '**', component: WelcomeComponent }
	];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutesModule {
}
