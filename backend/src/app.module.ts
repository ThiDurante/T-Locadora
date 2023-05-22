import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './env/config';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
