import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { StepFirstComponent } from './components/step-first/step-first.component';
import { StepSecondComponent } from './components/step-second/step-second.component';
import { StepThirdComponent } from './components/step-third/step-third.component';
import { StepFourthComponent } from './components/step-fourth/step-fourth.component';
import { DataService } from './services/data.service';
import { LocalService } from './services/local.service';
import { StepFifthComponent } from './components/step-fifth/step-fifth.component';
@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    StepFirstComponent,
    StepSecondComponent,
    StepThirdComponent,
    StepFourthComponent,
    StepFifthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [DataService, LocalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
