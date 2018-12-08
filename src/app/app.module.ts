import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app.routes.module';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/products/product.module';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		ProductModule,
		HomeModule,
		AppRoutesModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
