import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Return all list courses';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course ${id}`;
  }

  @Get(':id/:name')
  findMany(@Param('id') id: string, @Param('name') name: string) {
    return `Course ${id} - Name is ${name}`;
  }
}
