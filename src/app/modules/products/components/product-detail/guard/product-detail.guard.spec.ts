import { inject, TestBed } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';

describe('ProductDetailGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProductDetailGuard]
		});
	});

	it('should ...', inject([ProductDetailGuard], (guard: ProductDetailGuard) => {
		expect(guard).toBeTruthy();
	}));
});
