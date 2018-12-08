import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';


const homeRoutes: Routes = [
	{ path: 'welcome', component: WelcomeComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [RouterModule],
	declarations: []
})
export class HomeRoutesModule {
}
