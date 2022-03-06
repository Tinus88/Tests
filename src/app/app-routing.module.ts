import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display';
import { MaintenanceComponent } from './components/maintenance/maintenance';

const routes: Routes = [
  {path : 'display', component : DisplayComponent},
  {path : 'maintenance', component : MaintenanceComponent},
  {path : '', redirectTo : '/maintenance', pathMatch : 'full'},
  {path : '**', redirectTo : '/maintenance'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
