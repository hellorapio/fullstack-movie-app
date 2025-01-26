import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import CreateFavoriteDTO from './dto/create-favorite.dto';
import { User } from 'src/decorators/User.decorator';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async getFavorites(@User() userId: string) {
    const favs = await this.favoritesService.getFavorites(userId);
    return { status: 'success', message: '', data: favs };
  }

  @Post()
  async createFavorite(
    @Body() createFavoriteDTO: CreateFavoriteDTO,
    @User() userId: string,
  ) {
    const fav = await this.favoritesService.createFavorite(
      createFavoriteDTO,
      userId,
    );
    return { status: 'success', message: '', data: fav };
  }

  @Get(':id')
  async getFavoriteById(@Param('id') id: string, @User() userId: string) {
    const fav = await this.favoritesService.getFavoriteById(id, userId);
    return { status: 'success', message: '', data: fav };
  }

  @Patch(':id')
  async updateFavorite(
    @Param('id') id: string,
    @Body() createFavoriteDTO: CreateFavoriteDTO,
    @User() userId: string,
  ) {
    const fav = await this.favoritesService.updateFavorite(
      id,
      createFavoriteDTO,
      userId,
    );
    return { status: 'success', message: '', data: fav };
  }
  @Delete(':id')
  async deleteFavorite(@Param('id') id: string, @User() userId: string) {
    await this.favoritesService.deleteFavorite(id, userId);
    return { status: 'success', message: '', data: {} };
  }
}
