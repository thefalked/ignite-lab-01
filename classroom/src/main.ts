import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const MICROSERVICE_PORT = 3334;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'classroom',
        brokers: ['localhost:29092'],
      },
    },
  });

  app.startAllMicroservices().then(() => {
    console.log('[Classroom] Microservices started');
  });

  app.listen(MICROSERVICE_PORT).then(() => {
    console.log(
      `[Classroom] Microservice listening on port ${MICROSERVICE_PORT}`,
    );
  });
}

bootstrap();
