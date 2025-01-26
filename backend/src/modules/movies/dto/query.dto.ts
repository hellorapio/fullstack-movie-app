import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export default class QueryDTO {
  @IsString()
  q: string;

  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @IsOptional()
  page?: number;
}
