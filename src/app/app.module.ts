import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdSortableHeader } from './table/sortable.directive';
import { NgbdTableComplete } from './table/table-complete';
import { NgbdTimepickerAdapter } from './timepicker-adapter/timepicker-adapter';
import { ToastsContainer } from './toast/toast-container.component';
import { NgbdToastGlobal } from './toast/toast-global.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdTableComplete,
    NgbdSortableHeader,
    NgbdTimepickerAdapter,
    NgbdToastGlobal,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
