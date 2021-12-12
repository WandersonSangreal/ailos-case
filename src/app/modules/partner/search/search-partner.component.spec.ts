import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchPartnerComponent} from './search-partner.component';
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";

describe('SearchPartnerComponent', () => {
	let component: SearchPartnerComponent;
	let fixture: ComponentFixture<SearchPartnerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				FormsModule,
				ReactiveFormsModule,
				NgxMaskModule.forRoot(),
			],
			declarations: [SearchPartnerComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchPartnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should be invalid when empty', () => {

		expect(component.form.valid).toBeFalsy();

	});

	it('should be require field', () => {

		const search = component.form.controls['searchCPF'];
		const errors = search.errors || {};

		expect(errors.hasOwnProperty('required') && errors['required']).toBeTruthy();

	});

	it('should be invalid CPF field', () => {

		const search = component.form.controls['searchCPF'];
		search.setValue('abc.abc.abc-ab');
		const errors = search.errors || {};

		expect(errors.hasOwnProperty('pattern') && errors['pattern'].hasOwnProperty('requiredPattern')).toBeTruthy();

	});

	it('should be valid CPF field', () => {

		const search = component.form.controls['searchCPF'];
		search.setValue('123.456.789-12');
		const errors = search.errors || {};

		expect(errors).toEqual({});

	});

});
