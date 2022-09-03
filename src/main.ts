import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Swagger
  const swaggerConfig = new DocumentBuilder()
  .setTitle('API Recetas')
  .setDescription('Request collections')
  .setVersion('1.0')
  .addTag('Recetas')
  .build();
  
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
}
bootstrap();
