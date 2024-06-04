import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { TaskComponent } from './task/task.component';
import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddButtonComponent } from './add-button/add-button.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColumnSwitchComponent } from './column-switch/column-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    PersonComponent,
    ProductComponent,
    HomeComponent,
    ConfirmDialogComponent,
    AddButtonComponent,
    ColumnSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
