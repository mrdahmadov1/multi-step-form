import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/plan';
import { DataService } from 'src/app/services/data.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'step-second',
  templateUrl: './step-second.component.html',
  styleUrls: ['./step-second.component.css'],
})
export class StepSecondComponent implements OnInit {
  isYearly!: boolean;
  selectedPlan!: Plan;
  plans: Plan[] = [
    {
      name: 'arcade',
      price: this.isYearly ? 90 : 9,
      borderColor: 'border-yellow-500',
    },
    {
      name: 'advanced',
      price: this.isYearly ? 120 : 12,
      borderColor: 'border-pink-500',
    },
    {
      name: 'pro',
      price: this.isYearly ? 150 : 15,
      borderColor: 'border-blue-500',
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isYearly$.subscribe((isYearly) => {
      this.isYearly = isYearly;
    });
  }

  changeIsYearly() {
    this.dataService.setIsYearly(!this.isYearly);
  }

  selectPlan(plan: Plan) {
    this.selectedPlan = plan;
  }

  isYearlyListener() {
    this.changeIsYearly();
    this.onPriceChange();
  }

  onPriceChange() {
    if (this.isYearly) {
      this.plans.forEach((plan) => {
        plan.price = plan.price * 10;
      });
    } else {
      this.plans.forEach((plan) => {
        plan.price = plan.price / 10;
      });
    }
  }

  toThirdStep(selectedPlan: Plan) {
    if (selectedPlan) {
      this.dataService.setPlan(selectedPlan);
      console.log(selectedPlan);
    }
  }
}
