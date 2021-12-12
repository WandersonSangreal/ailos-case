import {Partner} from "../models/partner.model";

export const PARTNERS: Array<Partner> = [
	{cpf: '12345678912', name: 'Teste', status: {id: 1, name: 'Regular'}},
	{
		cpf: '11122233344', name: 'Mariane de Sousa Oliveira', status: {id: 1, name: 'Regular'}, accounts: [
			{number: '778461-8', type: {id: 1, name: 'Conta corrente'}},
			{number: '557932-4', type: {id: 2, name: 'Conta aplicação'}},
		]
	}
];
