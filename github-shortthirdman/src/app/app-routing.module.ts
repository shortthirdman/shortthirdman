import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GithubStatsComponent } from './components/github-stats/github-stats.component';
import { FeatureProfileComponent } from './components/feature-profile/feature-profile.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'github-stats', component: GithubStatsComponent, pathMatch: 'full' },
  { path: 'feature-profile', component: FeatureProfileComponent, pathMatch: 'full' },
  { path: 'contact-me', component: ContactMeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, anchorScrolling: 'enabled', useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
