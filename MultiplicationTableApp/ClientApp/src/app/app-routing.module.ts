import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MultiplicationTableComponent } from "./multiplication-table/multiplication-table.component";


const routes: Routes = [
  { path: '', redirectTo: '/multiplication-table', pathMatch: 'full' },
  { path: 'multiplication-table', component: MultiplicationTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
