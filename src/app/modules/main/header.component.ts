import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {filter} from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	// public breadcrumb$: Observable<Array<{ label: string, url: string }>>;

	public constructor(private router: Router, private route: ActivatedRoute) {
	}

	public ngOnInit(): void {

		this.createBreadcrumb(this.route);

		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(router => {
			this.createBreadcrumb(this.route);
		});

	}

	public createBreadcrumb(route: ActivatedRoute): void {

		const items: Array<{ label: string, url: string }> = [];

		console.log(route.snapshot);

		/*
		items.push({label: route.snapshot.data.breadcrumb, url: route.snapshot.url.map(url => url.path).join('/')});

		route.children.forEach(child => {

			items.push({label: child.snapshot.data.breadcrumb, url: child.snapshot.url.map(url => url.path).join('/')});

		});

		this.breadcrumb$ = of(items);
		*/

	}

}
