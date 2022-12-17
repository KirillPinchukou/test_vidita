export interface IOrder {
    id: string;
    name: string;
    sum: number;
    status: string;
    qty: number;
    volume: number;
    delivery_date: Date;
    currency: string;
}

export interface ServerResponse<T> {
    items: IOrder[];
}