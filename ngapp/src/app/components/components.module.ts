import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ResumeComponent, AboutComponent, FeaturesComponent, ProfileComponent],
  imports: [
    CommonModule,
	CoreModule,
	SharedModule
  ],
  exports: [ResumeComponent, AboutComponent, FeaturesComponent, ProfileComponent]
})
export class ComponentsModule { }
