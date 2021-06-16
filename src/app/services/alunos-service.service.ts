import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../models/aluno.model';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  url = 'http://localhost:8100';

  constructor(private httpClient: HttpClient) { }

  getAluno(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.url);
  }
        
  handleError(handleError: any): import("rxjs").OperatorFunction<Aluno[], any>{
      throw new Error('Method not implemented');
  }
}
