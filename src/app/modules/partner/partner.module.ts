import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PartnerComponent} from './partner.component';
import {SearchPartnerComponent} from './search-partner.component';
import {ListPartnerComponent} from './list-partner.component';
import {AddPartnerComponent} from './add-partner.component';
import {PartnerRoutingModule} from './partner-routing.module';


@NgModule({
	declarations: [
		PartnerComponent,
		SearchPartnerComponent,
		ListPartnerComponent,
		AddPartnerComponent
	],
	imports: [
		CommonModule,
		PartnerRoutingModule
	]
})
export class PartnerModule {
}
