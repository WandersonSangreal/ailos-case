import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegisterPartnerComponent} from "./register/register-partner.component";
import {PartnerComponent} from "@modules/partner/partner.component";

const routes: Routes = [
	{
		path: '',
		component: PartnerComponent,
		data: {
			breadcrumb: 'Admissão do Cooperado'
		},
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'register'
			},
			{
				path: 'register',
				data: {
					breadcrumb: 'Nova Admissão de Cooperado'
				},
				component: RegisterPartnerComponent
			},
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PartnerRoutingModule {
}
