import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { Client } from '@entities/Client';
import { Person } from '@entities/Person';

@Entity()
export class Banker extends Person {
  @Column()
  country: string;

  @Column({
    length: 10,
  })
  phone: string;

  @ManyToMany(() => Client)
  @JoinTable({
    name: 'bankers_clients',
    joinColumn: {
      name: 'banker_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'client_id',
      referencedColumnName: 'id',
    },
  })
  clients: Client[];
}
