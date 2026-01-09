import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { comparePassword } from '../common/bcrypt.js';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({ usernameField: 'employee_number' });
  }

  async validate(employee_number: string, password: string): Promise<any> {
    console.log(employee_number, password);

    const user = await this.prismaService.user.findUnique({
      where: { employee_number },
    });
    console.log("user", user);

    if (user) {
        const matched = await comparePassword(password, user.password);
        if (user && matched) {
          return user;
        } else {
          throw new UnauthorizedException(
            'パスワードが間違っています',
          );
        }
    } else {
          throw new UnauthorizedException(
            '登録されていません',
          );
    }
  }
}

/*
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({ usernameField: 'employee_number' });
  }

  async validate(employee_number: string, password: string): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: { employee_number },
    });
    const matched = await comparePassword(password, user.password);
    if (user && matched) {
      return user;
    } else {
      throw new UnauthorizedException(
        '社員番号またはパスワードが間違っています',
      );
    }
  }
}
*/
