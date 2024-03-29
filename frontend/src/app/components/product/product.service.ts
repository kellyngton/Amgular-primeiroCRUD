import { Product } from './product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3034/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'x',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseURL, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL)
  }
}
