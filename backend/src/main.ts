import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './env/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // set cors
  app.enableCors();
  await app.listen(config.BACK_PORT);
}
bootstrap();
