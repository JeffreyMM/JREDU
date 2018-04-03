import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MessageComponent} from './components/message/message.component';
import {Childmessage1Component} from "./components/childmessage1/childmessage1.component";
import {Childmessage2Component} from "./components/childmessage2/childmessage2.component";
import {Childmessage3Component} from "./components/childmessage3/childmessage3.component";

const routes: Routes = [
  {
    path: 'home/:id',
    component: HomeComponent
  }, {
    path: 'message',
    component: MessageComponent,
    children: [
      {
        path: 'childmessage1',
        component: Childmessage1Component
      }, {
        path: 'childmessage2',
        component: Childmessage2Component
      }, {
        path: 'childmessage3',
        component: Childmessage3Component
      }, {
        path: '**',
        component: Childmessage1Component
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  // {
  //   path: '**',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
