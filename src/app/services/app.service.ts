import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({providedIn: 'root'})
export class AppService {
    apiUrl = 'https://62c71b5d74e1381c0a718a0c.mockapi.io/api/people';
    constructor(private http: HttpClient) { }

    getPeople(): Observable<People[]> {
        return this.http.get<People[]>(this.apiUrl);
    }
    
}

