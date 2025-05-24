import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../categorias/categoria';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/api/categorias'; // URL de la API
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl, this.httpOptions)
      .pipe(
        map((response: any) => response._embedded.categorias),
        catchError((error: any) => {
          console.error('Error fetching categories:', error);
          return [];
        })
      );
  }
  getCategoria(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Categoria>(url, this.httpOptions)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching category:', error);
          return [];
        })
      );
  }
  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, JSON.stringify(categoria), this.httpOptions)
      .pipe(
        catchError((error: any) => {
          console.error('Error adding category:', error);
          return [];
        })
      );
  }
  updateCategoria(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiUrl}/${categoria.id}`;
    return this.http.put<Categoria>(url, JSON.stringify(categoria), this.httpOptions)
      .pipe(
        catchError((error: any) => {
          console.error('Error updating category:', error);
          return [];
        })
      );
  }
  deleteCategoria(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.httpOptions)
      .pipe(
        catchError((error: any) => {
          console.error('Error deleting category:', error);
          return [];
        })
      );
  }  

}
