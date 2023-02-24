import { Component, OnInit } from '@angular/core';
import { AddOns } from 'src/app/models/addOns';
import { Plan } from 'src/app/models/plan';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'step-fourth',
  templateUrl: './step-fourth.component.html',
  styleUrls: ['./step-fourth.component.css'],
})
export class StepFourthComponent implements OnInit {
  isYearly!: boolean;
  planPrice!: number;
  plan: Plan | undefined;
  addOns: AddOns[] | undefined;
  userInfo: User | undefined;
  totalPrice: number | undefined;

  constructor(
    private localService: LocalService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.plan$.subscribe((plan) => {
      this.plan = plan;
      this.planPrice = this.plan.price;
    });

    this.dataService.addOns$.subscribe((addOns) => {
      this.addOns = addOns;
      this.calculateTotal(this.planPrice, this.addOns);
    });

    this.dataService.userInfo$.subscribe((userInfo) => {
      this.userInfo = userInfo;
    });

    this.dataService.isYearly$.subscribe((isYearly) => {
      this.isYearly = isYearly;
    });
  }

  confirm() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    this.localService.saveData('user', JSON.stringify(this.userInfo));
    this.localService.saveData('plan', JSON.stringify(this.plan));
    this.localService.saveData('addOns', JSON.stringify(this.addOns));
    this.localService.saveData('totalPrice', JSON.stringify(this.totalPrice));
  }

  calculateTotal(planPrice: number, addOns: AddOns[]) {
    let totalPrice = planPrice;
    addOns.map((addOn) => {
      if (addOn.isSelected) {
        totalPrice += addOn.price;
      }
    });

    this.totalPrice = totalPrice;
  }
}
