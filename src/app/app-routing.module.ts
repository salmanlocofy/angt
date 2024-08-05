import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NonUILib } from "./pages/NonUILib/NonUILib.component";
const routes: Routes = [
  {
    path: "",
    component: NonUILib,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
