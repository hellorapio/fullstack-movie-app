import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './modules/movies/movies.module';
import { AuthModule } from './modules/auth/auth.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import LoggedGuard from './guards/logged.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      "envFilePath": ".env.local",
    }),
    PrismaModule,
    MoviesModule,
    AuthModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: LoggedGuard,
    },
  ],
})
export class AppModule {}
