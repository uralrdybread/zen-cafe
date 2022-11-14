import { MenuComponent } from './menu/menu.component';
import { LocationcontactComponent } from './locationcontact/locationcontact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'locationcontact', component: LocationcontactComponent},
  {path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const componentRoutes = [HomeComponent, LocationcontactComponent, MenuComponent]
