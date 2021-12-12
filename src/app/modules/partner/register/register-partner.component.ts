import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Partner} from "@models/partner.model";
import {PartnerService} from "@services/partner.service";

@Component({
	selector: 'app-add-partner',
	templateUrl: './register-partner.component.html',
	styleUrls: ['./register-partner.component.scss']
})
export class RegisterPartnerComponent implements OnInit {

	public partners$: Observable<Array<Partner>> = of([]);

	public constructor(private partnerService: PartnerService) {
	}

	public ngOnInit(): void {

		this.partners$ = this.partnerService.partnerSubject.asObservable();

	}

}
