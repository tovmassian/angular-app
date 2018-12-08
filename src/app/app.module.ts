import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './routes/app.routes.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { StarComponent } from './components/shared/star/star.component';

import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutesModule,
	],
	declarations: [
		AppComponent,
		WelcomeComponent,
		ProfileComponent,
		ProductListComponent,
		ProductDetailComponent,
		StarComponent,
		ConvertToSpacesPipe,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
