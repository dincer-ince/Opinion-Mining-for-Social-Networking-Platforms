import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder) { }

  formModel_user = this.fb.group({
    Username :"",
    Email :"",
    Password : ""
})

users : User[] = [
  {
    Username: "mrtglr",
    Email: "mrt@gmail.com",
    Password: "1234",
    TotalPosted: 5,
    role:"true"
  },
  {
    Username: "dincerince",
    Email: "dincer@gmail.com",
    Password: "1234",
    TotalPosted: 5,
    role:"false"
  },
  {
    Username: "doracik",
    Email: "dora@gmail.com",
    Password: "1234",
    TotalPosted: 5,
    role:"false"
  },
  {
    Username: "sudesahin",
    Email: "sude@gmail.com",
    Password: "1234",
    TotalPosted: 5,
    role:"false"
  }
]
}
