export interface Transaction {
    id: string;
    text: string;
    amount: number;
    userID: string;
    createdAt: Date;
}