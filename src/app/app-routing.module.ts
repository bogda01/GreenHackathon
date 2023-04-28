import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MapComponent } from './pages/map/map.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TopPeopleComponent } from './pages/top-people/top-people.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: StartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'map', component: MapComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'ranking', component: TopPeopleComponent },
  { path: 'settings', component: SettingsComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
