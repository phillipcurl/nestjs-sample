import './vendor';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compress from 'compression';
import * as cors from 'cors';
import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { Transport } from '@nestjs/microservices';

const port = process.env.PORT || 3001;

async function bootstrap() {
  const server = express();
  // parse body params and attach them to req.body
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use(cookieParser());
  server.use(compress());

  // secure apps by setting various HTTP headers
  server.use(helmet());

  // enable CORS - Cross Origin Resource Sharing
  server.use(cors());

  const app = await NestFactory.create(ApplicationModule, server);
  // const microservice = app.connectMicroservice({
  //   transport: Transport.TCP
  // });
  // await app.startAllMicroservicesAsync();
  await app.listen(Number(port));
  console.log(`App listening on port: ${port}`);
}
bootstrap();
