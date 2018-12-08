import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './components/star/star.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
	declarations: [
		StarComponent,
		ProfileComponent,
	],
	exports: [
		StarComponent,
		ProfileComponent,
		CommonModule,
		FormsModule,
	]
})
export class SharedModule {
}
