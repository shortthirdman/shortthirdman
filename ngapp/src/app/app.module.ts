import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,

	FontAwesomeModule,

    CoreModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ComingSoonComponent]
})
export class AppModule { }
