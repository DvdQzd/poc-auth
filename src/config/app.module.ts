import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/adapter/in/auth.controller';
import { UserService } from 'src/mock_service/user.service';
import adapterConfig from './adapter.config';
import useCaseConfig from './usecase.config';

@Module({
  imports: [JwtModule.register(
    { 
      secret: 'hard!to-guess_secret',
      signOptions: {
        expiresIn: '2 days',
      }
    }
  )],
  controllers: [AuthController],
  providers: [...adapterConfig, ...useCaseConfig, UserService],
})
export class AppModule {}
