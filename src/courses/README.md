# Nested routes example
```ts
import { Controller, Get } from '@nestjs/common';
@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'All courses';
  }
}
```
> The method @Get('list'), return in path something like this </br> <link>http://localhost/courses/list</link>
---
# Params in request
``` ts
import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course ${id}`;
  }
}
```
> Destructure in <code>@Param('id')</code> to return a specific param wich i wanted
## Multiple Params 
``` ts
import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

 @Get(':id/:name')
  findMany(@Param('id') id: string, @Param('name') name: string) {
    return `Course ${id} - Name is ${name}`;
  }
}
