import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'/user', pathMatch: 'full'},
  {path:'user', component:UserComponent},
  {path: 'mainpage', component: MainmenuComponent},
  {path: 'administrator', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
