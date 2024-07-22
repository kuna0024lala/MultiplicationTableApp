import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';

const routes: Routes = [
  { path: '', component: MultiplicationTableComponent },
  // other routes if any
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
