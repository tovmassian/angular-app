import { NgModule } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutesModule } from './home.routes.module';

@NgModule({
	imports: [
		SharedModule,
		HomeRoutesModule,
	],
	declarations: [
		WelcomeComponent
	]
})
export class HomeModule {
}
