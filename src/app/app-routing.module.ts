import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'messaging', loadChildren: () => import('./pages/messaging/messaging.module').then(m => m.MessagingModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'explore', loadChildren: () => import('./pages/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'notifications', loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsModule) },
  { path: 'messages', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule) },
  { path: 'lists', loadChildren: () => import('./pages/lists/lists.module').then(m => m.ListsModule) },
  { path: 'communities', loadChildren: () => import('./pages/communities/communities.module').then(m => m.CommunitiesModule) },
  { path: 'verified-choose', loadChildren: () => import('./pages/verified-choose/verified-choose.module').then(m => m.VerifiedChooseModule) },
  { path: 'compose', loadChildren: () => import('./pages/compose/compose.module').then(m => m.ComposeModule) },
  { path: '**', loadChildren: () => import('./pages/notfound404/notfound404.module').then(m => m.Notfound404Module) }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
