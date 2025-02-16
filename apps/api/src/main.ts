import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = await app.listen(process.env.PORT ?? 8000);
  console.log("nest backend server is running on :", server.address().port+ " port")
}
bootstrap();
