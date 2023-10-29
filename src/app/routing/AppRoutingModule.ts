import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyComponent} from "../component/MyComponent";

const routes: Routes = [
  { path: 'my-component', component: MyComponent },
  // Другие маршруты, если есть
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
