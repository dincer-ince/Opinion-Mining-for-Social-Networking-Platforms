import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

const routes: Routes = [
  {path: '**', component: MainmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
