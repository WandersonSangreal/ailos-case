import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public breadcrumb: Array<string> = [];

	public constructor(private router: Router, private route: ActivatedRoute) {
	}

	public ngOnInit(): void {

		this.recursivelyBreadcrumb(this.route);

	}

	public recursivelyBreadcrumb(route: ActivatedRoute) {

		if (route.snapshot.data.hasOwnProperty('breadcrumb')) {
			this.breadcrumb.push(route.snapshot.data['breadcrumb']);
		}

		if (Array.isArray(route.children)) {
			route.children.forEach(child => {
				this.recursivelyBreadcrumb(child);
			});
		}

	}

}
