import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // PIPE Validator
  app.useGlobalPipes(new ValidationPipe());

  // add swagger documentation to nest js
  const config = new DocumentBuilder()
    .setTitle('NEST API')
    .setDescription('The Nest js API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document); // takes a part as 1st argument
  // SwaggerModule.setup('api', app, document);
  await app.listen(3500);
}
bootstrap();
