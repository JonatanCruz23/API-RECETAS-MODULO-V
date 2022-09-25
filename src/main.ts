import configuration from './config/configuration';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Allowing http conections
  app.enableCors();

  // Defined Port from enviroment vars
  const port = configuration.port;

  // Swagger confifuration
  const configDocument = new DocumentBuilder()
  .setTitle('API Receta')
  .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT',
    description: 'Enter JWT token',
    in: 'header',
  }, 'JWT-auth')
  .setDescription('Request collections')
  .setVersion('1.0')
  .addTag('Colección de recetas (Endpoints)')
  .build();

  // Creating swagger document
  const document = SwaggerModule.createDocument(app, configDocument);
  SwaggerModule.setup('api', app, document);

  // Express listen on defined port
  await app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
}
bootstrap();
