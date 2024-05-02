import { Client } from "./client";
import { Company } from "./company";
import { Items } from "./items";

export interface Invoice {

    id:number;
    name: string;
    client: Client;
    company: Company;
    items: Items[];
    total:number;
}
