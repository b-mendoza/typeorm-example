import { Column, Entity } from 'typeorm';

import { Person } from '@entities/Person';

@Entity()
export class Client extends Person {
  @Column('numeric')
  balance: number;

  @Column({
    default: true,
  })
  is_active: boolean;
}
