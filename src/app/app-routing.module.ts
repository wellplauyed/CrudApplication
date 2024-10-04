import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyFormComponent } from './property-form/property-form.component';

const routes: Routes = [
  { path: 'properties', component: PropertyListComponent },
  { path: 'add', component: PropertyFormComponent },
  { path: 'edit/:id', component: PropertyFormComponent },
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: '**', redirectTo: '/properties' } // Redirects for invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
