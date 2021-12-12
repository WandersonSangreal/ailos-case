import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from '@modules/main/header.component';
import {AsideComponent} from '@modules/main/aside.component';
import {ContainerComponent} from '@modules/main/container.component';
import {PartnerRoutingModule} from "@modules/partner/partner-routing.module";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AsideComponent,
		ContainerComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		PartnerRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
