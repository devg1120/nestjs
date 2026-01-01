import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { LogInUserDto } from './dto/loginUser.dto.js';
import { ApiTags } from '@nestjs/swagger';
import { LocalStrategy } from '../common/localStrategy.js';

@ApiTags('login')
@Controller()
export class AuthController {
  constructor(private localStrategy: LocalStrategy) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async logIn(
    @Body() logInUserDto: LogInUserDto,
    @Req() request: any,
    @Res() response: any,
  ) {
    const user = await this.localStrategy.validate(
      logInUserDto.employee_number,
      logInUserDto.password,
    );
    request.session.user = user;
    response.status(HttpStatus.OK).json({ name: user.name, role: user.role });
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  //async logout(@Req() request: any, @Res() response: any): Promise<void> {
  async logout(@Req() request: any,): Promise<void> {
	  console.log("----  logout");
//	  console.dir(request);
    request.session.destroy();
    //response.clearCookie('connect.sid'); 

  }
}


