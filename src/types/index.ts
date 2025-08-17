export type TransactionType = 'income' | 'expense';
export type IncomeCategory = '給与' | '副収入' | '投資' | 'その他';
export type ExpenseCategory = '食費' | '交通費' | '光熱費' | '家賃' | '通信費' | '娯楽費' | 'その他';

export interface Transaction {
    id: string,
    date: string,
    amount: number,
    content: string,
    type: TransactionType,
    category: IncomeCategory | ExpenseCategory;
}