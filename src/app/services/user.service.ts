import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from "src/app/models/user.model";
import { Response } from "src/app/models/response.model";

const baseUrl="http://172.28.95.177:5000";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  
  apiURL:string = "";
    constructor(private http: HttpClient) {
    this.apiURL = baseUrl ; 
   }


  getUsers(): Observable<Response> {
    //console.log(this.http.get<User[]>(baseUrl).subscribe());
    return this.http.get<Response>(this.apiURL+'/users');
  }


  getUser(id:any): Observable<Response> {
    return this.http.get<Response>(`${this.apiURL}/user/${id}`);
  }

  updateUser(user:User): Observable<Response> {

    return this.http.put<Response>(this.apiURL+'/user',user);
  }

  addUser(user:User): Observable<Response> {

    return this.http.post<Response>(this.apiURL+'/user',user);
  }

  deleteUser(id:any): Observable<Response> {

    return this.http.delete<Response>(`${this.apiURL}/user/${id}`);
  }
}
