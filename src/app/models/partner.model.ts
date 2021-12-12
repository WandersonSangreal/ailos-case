import {Status} from "./status.model";
import {Account} from "@models/account.model";

export interface Partner {
	cpf: string;
	name: string;
	status: Status;
	accounts?: Array<Account>;
}
