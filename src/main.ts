import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(
    'api/v1',
    //  {
    // exclude: [{ path: 'health', method: RequestMethod.GET }, 'go'],
    // }
  );
  // console.log(process.env);
  await app.listen(5050);
}
bootstrap();
