import { Injectable } from '@angular/core';
import { User } from 'src/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class BasicDataService {

  constructor() { }

  emailVerificationCode = ''
  email = ''
  user: User

}
