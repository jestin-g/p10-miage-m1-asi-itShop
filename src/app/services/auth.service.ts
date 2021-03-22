import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../entities/item';
import { User } from '../entities/user';
import { USERS } from '../mock-data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(User: any) {
  
 //call to api
  }


}
