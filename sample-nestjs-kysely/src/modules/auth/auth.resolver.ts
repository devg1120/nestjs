import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LocalGuard } from '../../guard/local.guard';
import { LoginUserInput } from './models/login-user.input';
import { RegisterUserInput } from './models/register-user.input';
import { UserModel } from '../users/interfaces/user.model';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalGuard)
    @Mutation(() => UserModel, { nullable: true })
    async login(
        @Args('input') input: LoginUserInput,
        @Context() context
    ) {
        console.log("== call AuthResolver login mutation ==");

        return context.req.user
    }
/*
    @Mutation()
    async logout(
        @Context() context
    ) {
        console.log("== call AuthResolver logout mutation ==");

        return context.req.session.destroy();
    }
*/
/*
@Mutation(() => Boolean)
async logout(@Context() context: any) {
  const { req, res } = context;
  // クッキーのクリア（HttpOnly属性などを付与している場合）
  //res.clearCookie('access_token');
  req.session.destroy();
  res.clearCookie('connect.sid');
  return true;
}
*/


  @Mutation(() => Boolean)
  //async logout(@Context() context: { req: Request; res: Response }): Promise<boolean> {
  async logout(@Context() context: any): Promise<boolean> {
    console.log("== call AuthResolver logout mutation ==");
    return new Promise((resolve, reject) => {
      // 1. Destroy session on the server
      const { req, res } = context;
     req.session.destroy((err) => {
        if (err) {
           console.log("xxxxxxxxxxxxxxxxxxxxx")
          return reject(false);
        }
        // 2. Clear the cookie on the client (default name is 'connect.sid')
        //res.clearCookie('connect.sid');
	res.clearCookie('connect.sid', { path: '/' });


        resolve(true);

      });
    });
  }


/*
  @Mutation(() => Boolean)
  //async logout(@Context() context: { req: Request; res: Response }): Promise<boolean> {
  async logout(@Context() context: { req: any; res: any }): Promise<boolean> {
    console.log("== call AuthResolver logout mutation ==");
    return new Promise((resolve, reject) => {
      // 1. Destroy session on the server
      context.req.session.destroy((err) => {
        if (err) {
          return reject(false);
        }

        // 2. Clear the cookie on the client (default name is 'connect.sid')
        context.res.clearCookie('connect.sid');
        resolve(true);
      });
    });
  }
*/
  

    @Mutation(() => UserModel, { nullable: true })
    async register(
        @Args('input') input: RegisterUserInput,
        @Context() context
    ) {
        console.log("== call AuthResolver login mutation ==");

        return this.authService.registerUser(input)
    }
}
