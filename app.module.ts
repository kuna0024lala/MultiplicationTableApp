import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplicationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add this line
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
