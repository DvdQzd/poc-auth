import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/adapter/in/auth.controller';
import { UserService } from 'src/adapter/out/user/user.service';
import { User } from 'src/adapter/out/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [],
})

export class UserModule {}