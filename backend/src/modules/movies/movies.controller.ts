import { Controller, Get, Param, Query } from '@nestjs/common';
import Public from 'src/decorators/Public.decorator';
import { MoviesService } from './movies.service';
import QueryDTO from './dto/query.dto';

@Public()
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async getAll(@Query() query: QueryDTO) {
    const movies = await this.moviesService.getAll(query);
    return { status: 'success', message: '', data: movies };
  }

  @Get('/:id')
  async getMovie(@Param('id') id: string) {
    const movie = await this.moviesService.getMovie(id);
    return { status: 'success', message: '', data: movie };
  }
}
