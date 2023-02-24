import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepFirstComponent } from '../step-first/step-first.component';

@Component({
  selector: 'multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MultiStepFormComponent implements OnInit {
  @ViewChild(StepFirstComponent) personalInfo!: FormGroup;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
