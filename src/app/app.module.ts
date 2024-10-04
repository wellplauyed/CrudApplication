import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyFormComponent } from './property-form/property-form.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    PropertyFormComponent,
    PropertyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // Add FormsModule here
    HttpClientModule // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
