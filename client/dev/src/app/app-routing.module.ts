import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarthComponent } from '@features/earth/earth.component';

const routes: Routes = [
  { path: '', component: EarthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
