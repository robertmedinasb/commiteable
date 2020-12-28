import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');
  const port: number = 4000;
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
