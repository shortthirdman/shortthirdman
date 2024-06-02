import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactMeComponent } from './contact-me/contact-me.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GithubStatsComponent } from './github-stats/github-stats.component';
import { FeatureProfileComponent } from './feature-profile/feature-profile.component';

@NgModule({
  declarations: [
    ContactMeComponent,
    WelcomeComponent,
    GithubStatsComponent,
    FeatureProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
