import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateExampleRequestDto } from './dto/create-example-request.dto';
import { UpdateExampleRequestDto } from './dto/update-example-request.dto';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  async create(@Body() dto: CreateExampleRequestDto) {
    return await this.exampleService.create(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.exampleService.findOne(id);
  }

  @Get('')
  async findAll() {
    return await this.exampleService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExampleRequestDto) {
    return this.exampleService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exampleService.remove(id);
  }
}
