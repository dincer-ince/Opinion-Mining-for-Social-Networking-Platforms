import { Injectable } from '@angular/core';
import { Loger } from '../models/loger.model';

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor() { }

  logers: Loger[]=[
    {
      process: "Create post",
      user: "mrtglr",
      ip: "220.199.184.184",
      situation: true,
      time: "11/12/2021 02:55:52"
    },
    {
      process: "Login",
      user: "dincerince",
      ip: "245.155.145.14",
      situation: true,
      time: "09/12/2021 11:21:13"
    },
    {
      process: "Upvote post",
      user: "doracık",
      ip: "117.105.94.184",
      situation: true,
      time: "26/04/2021 11:59:35"
    },
    {
      process: "Comment post",
      user: "sudesahin",
      ip: "160.254.124.64",
      situation: true,
      time: "03/04/2021 06:27:25"
    },
    {
      process: "Register",
      user: "Ahmett",
      ip: "102.150.209.102",
      situation: true,
      time: "13/12/2021 23:07:30"
    }
  ]

}
