import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyComponent} from "./component/MyComponent";

const routes: Routes = [
  { path: 'my-component', component: MyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
