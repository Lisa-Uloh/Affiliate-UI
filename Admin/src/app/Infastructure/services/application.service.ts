import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends BaseService{

  constructor(http: HttpClient) {
    super(http)
  }

  getReferalApplications(): Observable<Referal[]> {
    return this.http.get<Referal[]>(this.getURI('ReferalApplications/Referal/'))
      .pipe(catchError(this.handleError));
  }
}
