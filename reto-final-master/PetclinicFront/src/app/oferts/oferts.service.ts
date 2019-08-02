import {Injectable} from '@angular/core';
import {Ofert} from './ofert';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../error.service';


@Injectable()
export class OfertService {

  entity_url = environment.REST_API_URL + 'oferts';

  private handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('OfertService');
  }

  getOferts(): Observable<Ofert[]> {
    return this.http.get<Ofert[]>(this.entity_url)
      .pipe(
        catchError(this.handlerError('getOferts', []))
      );
  }

  getOfertById(ofert_id: string): Observable<Ofert> {
    return this.http.get<Ofert>(this.entity_url + '/' + ofert_id)
      .pipe(
          catchError(this.handlerError('getOfertById', {} as Ofert))
      );
  }

  addOfert(ofert: Ofert): Observable<Ofert> {
    return this.http.post<Ofert>(this.entity_url, ofert)
      .pipe(
        catchError(this.handlerError('addOfert', ofert))
      );
  }

  updateOfert(ofert_id: string, ofert: Ofert): Observable<{}> {
    return this.http.put<Ofert>(this.entity_url + '/' + ofert_id, ofert)
      .pipe(
        catchError(this.handlerError('updateOfert', ofert))
      );
  }

  deleteOfert(ofert_id: string): Observable<{}> {
    return this.http.delete<Ofert>(this.entity_url + '/' + ofert_id)
      .pipe(
         catchError(this.handlerError('deleteOfert', [ofert_id]))
      );
  }


}
