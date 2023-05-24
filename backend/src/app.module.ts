import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import config from './env/config';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), UserModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
