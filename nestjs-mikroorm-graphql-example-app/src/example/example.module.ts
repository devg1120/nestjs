import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { Example } from './example.entity';
import { ExampleService } from './example.service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Example] })],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
