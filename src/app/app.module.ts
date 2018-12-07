import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/product-list.component';
import { StarComponent } from './components/shared/star/star.component';

import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		ProductListComponent,
		StarComponent,
		ConvertToSpacesPipe,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
