import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from 'ngx-mask';

import {PartnerComponent} from './partner.component';
import {SearchPartnerComponent} from './search/search-partner.component';
import {ListPartnerComponent} from './list/list-partner.component';
import {RegisterPartnerComponent} from './register/register-partner.component';
import {PartnerRoutingModule} from './partner-routing.module';


@NgModule({
	declarations: [
		PartnerComponent,
		SearchPartnerComponent,
		ListPartnerComponent,
		RegisterPartnerComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PartnerRoutingModule,
		NgxMaskModule.forRoot(),
	]
})
export class PartnerModule {
}
