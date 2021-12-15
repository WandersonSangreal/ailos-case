import {Component, OnInit} from '@angular/core';
import {PartnerService} from "../../../services/partner.service";
import {Observable, of} from "rxjs";
import {Partner} from "../../../models/partner.model";

@Component({
	selector: 'app-list-partner',
	templateUrl: './list-partner.component.html',
	styleUrls: ['./list-partner.component.scss']
})
export class ListPartnerComponent implements OnInit {

	public partners$: Observable<Array<Partner>> = of([]);

	public constructor(private partnerService: PartnerService) {
	}

	public get response(): boolean {
		return this.partnerService.response;
	}

	public ngOnInit(): void {

		this.partners$ = this.partnerService.partnerSubject.asObservable();

	}

}
