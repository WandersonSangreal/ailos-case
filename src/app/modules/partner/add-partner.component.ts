import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-add-partner',
	templateUrl: './add-partner.component.html',
	styleUrls: ['./add-partner.component.scss']
})
export class AddPartnerComponent implements OnInit {

	public title: string = 'Nova Admissão de Cooperado';

	public constructor() {
	}

	public ngOnInit(): void {
	}

}
