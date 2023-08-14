import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pages/home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'pages/home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'pages/messaging', loadChildren: () => import('./pages/messaging/messaging.module').then(m => m.MessagingModule) }, { path: 'pages/profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) }, { path: 'pages/login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
