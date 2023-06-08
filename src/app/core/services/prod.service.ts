import { Injectable } from '@angular/core';
import { Prod } from '../interfaces/Prod';
import { apiEndpoints } from '../api-endpoints';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProdService {
  product: Prod[];
  URL = apiEndpoints.baseUrl;

  favourites: any = [];
  constructor(private http: HttpClient) {}

  addToFav(obj, $event) {
    let index = 0.1;
    for (var i = 0; i < this.favourites.length; i++) {
      if (this.favourites[i]?.id == obj.id) {
        index = i;
        this.favourites.splice(i, 1);
        $event.currentTarget.classList.remove('favIcon');
        break;
      } else {
        index = 0.1;
      }
    }
    if (index == 0.1) {
      this.favourites.unshift(obj);
      $event.currentTarget.classList.add('favIcon');
    }
  }

  getFav() {
    return this.favourites;
  }

  getShop(params: HttpParams): Observable<any> {
    return this.http.get(
      `${this.URL}${apiEndpoints.products.getProductsPage}`,
      { params }
    );
  }
  getProds(param: HttpParams) {
    return this.http.get(
      `${this.URL}${apiEndpoints.products.getProductDetails}`,
      { params: param }
    );
    // .pipe(
    //   map((data: any[]) => {
    //     const productsArray = Object.values(data);
    //     const product = productsArray.find(
    //       (prod: any) => prod.productId == id
    //     );
    //     console.log(product);
    //     return product || null;
    //   })
    // );
  }
  // getProdsQuantity(id: number) {
  //   return this.http.get(
  //     `${this.URL}${apiEndpoints.products.getProductDetails(id)}`
  //   );
  // }

  getRatings(id: number) {
    return this.http.get(
      `${this.URL}${apiEndpoints.products.getProductReviews(id)}`
    );
  }
  sendRatings(ratingForm: any) {
    return this.http.post(
      `${this.URL}${apiEndpoints.customers.rateProduct}`,
      ratingForm
    );
  }
  sendQuestions(questionForm: any) {
    return this.http
      .post(`${this.URL}${apiEndpoints.customers.askQuestion}`, questionForm)
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }

  getCategory(): Observable<any> {
    return this.http.get(`${this.URL}${apiEndpoints.products.getCategories}`);
  }

  getArrival(): Observable<any> {
    return this.http.get(`${this.URL}${apiEndpoints.products.getNewArrivals}`);
  }
  getRecommended(): Observable<any> {
    return this.http.get(`${this.URL}${apiEndpoints.products.getRecommended}`);
  }
}
