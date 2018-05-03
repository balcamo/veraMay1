import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* routes wnated in the app */
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SafetyComponent } from './safety/safety.component';
import { MailingComponent } from './mailing/mailing.component';
import { OutageComponent } from './outage/outage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'safety',
    component: SafetyComponent
  },
  {
    path: 'mailing',
    component: MailingComponent
  },
  {
    path: 'outage',
    component: OutageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
