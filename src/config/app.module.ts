import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/adapter/in/auth.controller';
// import { User } from 'src/adapter/out/user/user.entity';
// import { UserService } from 'src/adapter/out/user/user.service';
import { Connection } from 'typeorm';
// import { UserService } from 'src/mock_service/user.service';
import adapterConfig from './adapter.config';
import useCaseConfig from './usecase.config';
import { UserModule } from './user.module';

@Module({
  imports: [
    UserModule,
    JwtModule.register(
      {
        secret: 'hard!to-guess_secret',
        signOptions: {
          expiresIn: '2 days',
        }
      }
    ),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [...adapterConfig, ...useCaseConfig],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
