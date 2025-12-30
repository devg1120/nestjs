import { Migration } from '@mikro-orm/migrations';

export class Migration20251229083829 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "example" ("id" bigserial primary key, "name" varchar(255) not null);');
  }

}
