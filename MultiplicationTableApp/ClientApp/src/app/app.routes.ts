import { Routes } from '@angular/router';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/multiplication-table', pathMatch: 'full' },
  { path: 'multiplication-table', component: MultiplicationTableComponent }
];
