import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PartnerService} from "../../../services/partner.service";

@Component({
	selector: 'app-search-partner',
	templateUrl: './search-partner.component.html',
	styleUrls: ['./search-partner.component.scss']
})
export class SearchPartnerComponent implements OnInit {

	public form: FormGroup;
	public loaded: string = '';
	public loading: boolean = false;

	public constructor(private formBuilder: FormBuilder, private partnesService: PartnerService) {

		this.form = this.formBuilder.group({
			searchCPF: [null, Validators.compose([
				Validators.required,
				Validators.minLength(14),
				Validators.maxLength(14),
				Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]
			)],
		});

	}

	public ngOnInit(): void {
	}

	public search(): void {

		this.loading = true;

		if (this.form.valid) {

			this.partnesService.searchPartners(this.form.value.searchCPF.replace(/\D/g, '')).then(_ => {
				this.loading = false;
				this.loaded = this.form.value.searchCPF;
			});

		} else {

			Object.keys(this.form.controls).some(field => {

				if (this.form.controls[field].status === 'INVALID') {

					this.form.controls[field].markAsTouched();

					const control = document.getElementById(field) as HTMLInputElement;

					control.focus();

					this.loading = false;

					return true;

				}

				return false;

			});

		}


	}

}
