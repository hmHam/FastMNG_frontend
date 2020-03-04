import { Eatery } from '../eatery/eatery';

export class Table {
    id: number;
    eatery: Eatery | number;
    accomodation: number;
    number: string;
    is_available: boolean;
    is_reserved: boolean;
    is_using: boolean;
}
