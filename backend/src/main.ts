import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaExceptionFilter } from './filters/PrismaException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: process.env.NODE_ENV === 'production',
    }),
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Order API Task')
    .setDescription('API Description')
    .setVersion('1.0')
    .addTag('orders')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
