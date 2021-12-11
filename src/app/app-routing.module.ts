import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from "@modules/main/container.component";

const routes: Routes = [
	{
		path: '',
		component: ContainerComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'partner'
			},
			{
				path: 'partner',
				loadChildren: () => import('./modules/partner/partner.module').then(module => module.PartnerModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
