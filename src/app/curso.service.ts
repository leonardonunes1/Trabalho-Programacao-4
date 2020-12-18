import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Curso } from './curso';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

const apiUrl = 'http://localhost:3000/api/courses';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  constructor(private http: HttpClient) { 
  }

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(apiUrl).pipe(
      tap(cursos => console.log("Cursos ",cursos)),
      catchError(this.handleError('listar Cursos',[]))
    );

  }


  adicionar(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(apiUrl,curso,httpOptions).pipe(
      tap(prod => console.log(prod)),
      catchError(this.handleError('Adicionar Curso',null))
    )

  }

  buscarPorId(id: number): Observable<Curso> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Curso>(url).pipe(
      tap(_ => console.log(`buscarPorId Curso id=${id}`)),
      catchError(this.handleError<Curso>(`buscarPorId id=${id}`))
    );
  }

  editar (id, curso): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, curso, httpOptions);
  }
  
  deletar (id) {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url);

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
