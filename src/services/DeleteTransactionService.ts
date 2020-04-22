import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepostory = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepostory.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction doesnot exist');
    }

    await transactionsRepostory.remove(transaction);
  }
}

export default DeleteTransactionService;
