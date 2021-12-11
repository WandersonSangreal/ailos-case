import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public showContents$: Observable<boolean>;

	public constructor() {

		this.showContents$ = of(false);

	}

	public ngOnInit(): void {

		this.showContents$ = of(true);

	}


}
