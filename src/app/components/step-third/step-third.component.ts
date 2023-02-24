import { Component, OnInit } from '@angular/core';
import { AddOns } from 'src/app/models/addOns';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'step-third',
  templateUrl: './step-third.component.html',
  styleUrls: ['./step-third.component.css'],
})
export class StepThirdComponent implements OnInit {
  isYearly!: boolean;

  addOns: AddOns[] = [
    {
      name: 'Online service',
      desc: 'Access to multiplayer games',
      price: 1,
      isSelected: false,
    },

    {
      name: 'Larger service',
      desc: 'Extra 1TB of cloud save',
      price: 2,
      isSelected: false,
    },

    {
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      price: 2,
      isSelected: false,
    },
  ];

  selectedAddOns!: AddOns[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isYearly$.subscribe((isYearly: boolean) => {
      this.isYearly = isYearly;
      this.addOns = this.refreshPrice(isYearly, this.addOns);
    });
  }

  refreshPrice(isYearly: boolean, addOns: AddOns[]) {
    addOns.map((addOn) => {
      if (addOn.price < 3 && isYearly) {
        addOn.price *= 10;
      } else if (addOn.price > 3 && !isYearly) {
        addOn.price /= 10;
      }
    });

    return addOns;
  }

  filterSelectedAddOns(): AddOns[] {
    return this.addOns.filter((addOn) => {
      return addOn.isSelected;
    });
  }

  toFourthStep() {
    this.selectedAddOns = this.filterSelectedAddOns();
    this.dataService.setAddOns(this.selectedAddOns);
  }
}
