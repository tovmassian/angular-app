import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './modules/home/components/welcome/welcome.component';

const appRoutes: Routes = [
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
