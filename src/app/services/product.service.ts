import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as interfaces from '../models/interfaces/index';
import { Observable, throwError, from } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private productUrl: string = '../../../api/products/products.json';
	constructor(private http: HttpClient) { }

	getProducts(): Observable<interfaces.IProduct[]> {
		return this.http.get<interfaces.IProduct[]>(this.productUrl).pipe(catchError(this.handleError));
	}

	getProductById(id: number): Observable<interfaces.IProduct> {
		return this.http.get<interfaces.IProduct[]>(this.productUrl).pipe(
			map(products => products.find(product => product.productId === id)),
			catchError(this.handleError)
		);
	}

	private handleError(err: HttpErrorResponse) {
		const errorMessage = (err.error instanceof ErrorEvent) ?
			`An error occurred: ${err.error.message}` :
			`Server returned code: ${err.status}, error message is: ${err.message}`;

		return throwError(errorMessage);
	}
}
