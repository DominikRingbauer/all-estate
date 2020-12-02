import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: 'properties', component: PropertiesComponent
  },{
    path: 'team', component: TeamComponent
  },{
    path: 'services', component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
