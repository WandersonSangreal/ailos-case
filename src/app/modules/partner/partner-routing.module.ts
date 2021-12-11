import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddPartnerComponent} from "./add-partner.component";

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'register'
			},
			{
				path: 'register',
				component: AddPartnerComponent
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
