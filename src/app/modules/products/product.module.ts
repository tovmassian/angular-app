import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutesModule } from '../../routes/app.routes.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ConvertToSpacesPipe } from './components/pipes/convert-to-spaces.pipe';


@NgModule({
	imports: [
		SharedModule,
		AppRoutesModule
	],
	declarations: [
		ProductListComponent,
		ProductDetailComponent,
		ConvertToSpacesPipe,
	]
})
export class ProductModule {
}
