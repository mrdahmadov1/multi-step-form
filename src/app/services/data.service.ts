import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddOns } from '../models/addOns';
import { Plan } from '../models/plan';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  //user
  private userInfo = new BehaviorSubject<User>({
    name: '',
    email: '',
    phone: '',
  });
  public userInfo$ = this.userInfo.asObservable();

  //plan
  private plan = new BehaviorSubject<Plan>({
    name: '',
    price: 0,
    borderColor: '',
  });
  public plan$ = this.plan.asObservable();

  //add ons
  private addOns = new BehaviorSubject<AddOns[]>([]);
  public addOns$ = this.addOns.asObservable();

  //isYearly
  private isYearly = new BehaviorSubject(false);
  public isYearly$ = this.isYearly.asObservable();

  constructor() {}

  ngOnInit(): void {}

  setUserInfo(value: User) {
    this.userInfo.next(value);
  }

  setPlan(value: Plan) {
    this.plan.next(value);
  }

  setAddOns(value: AddOns[]) {
    this.addOns.next(value);
  }

  setIsYearly(value: boolean) {
    this.isYearly.next(value);
  }
}
