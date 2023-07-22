import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * The function `bootstrap` creates and starts a NestJS application on port 8081.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8081);
}
bootstrap();
