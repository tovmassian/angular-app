import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'pm-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	@Input() position: string;
	@Input() fullName: string;
	@Input() imgSrc: string;
	@Input() githubUser: string;

	positionText: string;

	constructor() {
	}

	ngOnInit() {
		this.positionText = this.generatePositionText(this.position);
	}

	private generatePositionText(position: string): string {
		switch (position) {
			case 'tutor':
				return 'Tutored by: ';
			case 'developer':
				return 'Developed by: ';
			default :
				return 'By: ';
		}
	}

}
