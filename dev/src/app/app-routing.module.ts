import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarthComponent } from './earth/earth.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{ path: '', component: NavbarComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
