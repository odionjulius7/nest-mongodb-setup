import { Module } from '@nestjs/common';
import { AppController } from './app.ccontroller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppUserSchema } from './app.models';

@Module({
  // connecting with the mongodb database
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Julius44:HJEVn6msECLIJCoH@cluster0.bs7oj.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'appuser', schema: AppUserSchema }]), // the schema setup
    UsersModule,
  ],
  // imports: [UsersModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
