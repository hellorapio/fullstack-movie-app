import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateFavoriteDTO from './dto/create-favorite.dto';
import UpdateFavoriteDTO from './dto/update-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}

  async getFavorites(userId: string) {
    return await this.prisma.favorites.findMany({ where: { userId: userId } });
  }

  async createFavorite(data: CreateFavoriteDTO, userId: string) {
    return await this.prisma.favorites.create({
      data: { ...data, userId: userId },
    });
  }

  async deleteFavorite(id: string, userId: string) {
    const fav = await this.prisma.favorites.delete({
      where: { id: id, userId: userId },
    });

    if (!fav) {
      throw new NotFoundException('Favorite not found');
    }

    return fav;
  }

  async getFavoriteById(id: string, userId: string) {
    const fav = await this.prisma.favorites.findFirst({
      where: { id: id, userId: userId },
    });

    if (!fav) {
      throw new NotFoundException('Favorite not found');
    }

    return fav;
  }

  async updateFavorite(id: string, data: UpdateFavoriteDTO, userId: string) {
    const fav = await this.prisma.favorites.update({
      where: { id: id, userId: userId },
      data: data,
    });

    if (!fav) {
      throw new NotFoundException('Favorite not found');
    }

    return fav;
  }
}
