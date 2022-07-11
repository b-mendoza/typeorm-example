import { Column, Entity } from 'typeorm';

import { Person } from '@entities/Person';

@Entity()
export class Banker extends Person {
  @Column()
  country: string;

  @Column({
    length: 10,
  })
  phone: string;
}
