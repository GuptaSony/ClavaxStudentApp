import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentDetailsComponent } from './modals/student-details/student-details.component';
import { ToastsContainerComponent } from './modals/toasts-container/toasts-container.component';
import {ToastService} from './services/toast'

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentDetailsComponent,
    ToastsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
