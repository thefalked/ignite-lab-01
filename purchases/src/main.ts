import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const MICROSERVICE_PORT = 3333;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(MICROSERVICE_PORT);
}
bootstrap();
