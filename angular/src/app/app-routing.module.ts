import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchComponent } from './search/search.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';


const routes: Routes = [
  { path: "", redirectTo: "feed", pathMatch: "full" },
  { path: "register", component: RegisterComponent, canActivate: [AuthService] },
  { path: "login", component: LoginComponent, canActivate: [AuthService] },
  { path: "feed", component: FeedComponent, canActivate: [AuthService], data: { loggedIn: true } },
  { path: "profile", component: ProfileComponent, canActivate: [AuthService], data: { loggedIn: true } },
  { path: "messages", component: MessagesComponent, canActivate: [AuthService], data: { loggedIn: true } },
  { path: "search", component: SearchComponent, canActivate: [AuthService], data: { loggedIn: true } },
  { path: "requests", component: FriendRequestComponent, canActivate: [AuthService], data: { loggedIn: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
