import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './modules/movies/movies.module';
import { AuthModule } from './modules/auth/auth.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MoviesModule,
    AuthModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
