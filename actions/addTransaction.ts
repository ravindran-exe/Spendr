 "use server";
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

interface TransactionData {
    text: string;
    amount: number;
  }
  
  interface TransactionResult {
    data?: TransactionData;
    error?: string;
  }
  
  async function addTransaction(formData: FormData): Promise<TransactionResult> {
    const textValue = formData.get('text');
    const amountValue = formData.get('amount');
    
    if (!textValue || textValue === '' || !amountValue) {
      return { error: 'Text or amount is missing' };
    }
  
    const text: string = textValue.toString();
    const amount: number = parseFloat(amountValue.toString());
  
    const { userId } = auth();
    if (!userId) {
      return { error: 'User not found' };
    }
  
    try {
      const createdTransaction: TransactionData = await db.transactions.create({
        data: {
          text,
          amount,
          userID: userId,
        },
      });
  
      
      return { data: createdTransaction };
    } catch (error) {
      console.error('Error adding transaction:', error);
      return { error: 'Transaction not added' };
    }
  }
  
  export default addTransaction;