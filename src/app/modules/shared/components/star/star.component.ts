import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
	selector: 'pm-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.scss'],
})

export class StarComponent implements OnChanges {
	@Input() rating: number;
	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
	starWidth: number;

	ngOnChanges(): void {
		this.starWidth = this.rating * 15;
	}

	OnRationgClick(): void {
		this.ratingClicked.emit(`This Product Rating is: ${this.rating}`);
	}
}
