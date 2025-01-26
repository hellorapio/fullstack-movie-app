import { Injectable } from '@nestjs/common';
import QueryDTO from './dto/query.dto';

@Injectable()
export class MoviesService {
  async getAll(query: QueryDTO) {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.API}&s=${query.q}&page=${query.page || 1}`,
    );
    const movies = await data.json();
    return movies;
  }

  async getMovie(id: string) {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.API}&i=${id}`,
    );
    const movie = await data.json();
    return movie;
  }
}
