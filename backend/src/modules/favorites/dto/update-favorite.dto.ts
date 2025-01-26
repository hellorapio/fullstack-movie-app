import { IsNumber, IsOptional, IsString } from 'class-validator';

export default class UpdateFavoriteDTO {
  @IsString()
  @IsOptional()
  movieId?: string;

  @IsNumber()
  @IsOptional()
  rate?: number;

  @IsString()
  @IsOptional()
  comment?: string;
}
