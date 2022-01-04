import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './addComponent/add/add.component';
import { homeComponent } from './homeComponent/homeComponent';
import { ListComponent } from './listComponent/listComponent';

const routes: Routes = [
    { path: '',   redirectTo: '/homeComponent', pathMatch: 'full' },
    {path:'home',component:homeComponent},
    {path:'home/add',component:AddComponent},
    {path:'home/lists',component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }