import { IsNumber, IsString } from 'class-validator';

export default class CreateFavoriteDTO {
  @IsString()
  movieId: string;

  @IsNumber()
  rate: number;

  @IsString()
  comment: string;
}
