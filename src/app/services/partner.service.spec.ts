import {TestBed} from '@angular/core/testing';

import {PartnerService} from './partner.service';
import {Partner} from "../models/partner.model";
import {HttpClient} from "@angular/common/http";

let httpClientSpy: jasmine.SpyObj<HttpClient>;

describe('PartnesService', () => {
	let service: PartnerService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
		service = TestBed.inject(PartnerService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return expected searched partners', (done: DoneFn) => {

		const expectedPartner: Partner[] = [{cpf: '12345678912', name: 'Teste', status: {id: 1, name: 'Regular'}}];

		service.searchPartners('12345678912');

		service.partnerSubject.subscribe(value => {

				expect(value).toEqual(expectedPartner);

				done();

			},
			done.fail
		);

	});

});
