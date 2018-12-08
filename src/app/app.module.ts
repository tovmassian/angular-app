import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './routes/app.routes.module';
import { HomeModule } from './modules/home/home.module';
import { ProductModule } from './modules/products/product.module';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutesModule,
		ProductModule,
		HomeModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
