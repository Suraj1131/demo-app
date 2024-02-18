import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { RoutingcomponenComponent } from './routingcomponen/routingcomponen.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: RoutingcomponenComponent }, // Display RoutingcomponenComponent at the root path
  { path: '**', component: RoutingcomponenComponent } // Handle other unknown routes by displaying RoutingcomponenComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
