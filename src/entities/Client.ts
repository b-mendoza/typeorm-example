import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';

import { Person } from '@entities/Person';
import { Transaction } from '@entities/Transaction';
import { Banker } from '@entities/Banker';

@Entity()
export class Client extends Person {
  @Column('numeric')
  balance: number;

  @Column({
    default: true,
  })
  is_active: boolean;

  @ManyToOne(() => Transaction, (transaction) => transaction.client)
  @JoinColumn({
    name: 'transactions_id',
  })
  transactions: Transaction[];

  @ManyToMany(() => Banker)
  bankers: Banker[];
}
