import { Injectable, CanActivate, ExecutionContext, 
UnauthorizedException, } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
/*
@Injectable()
export class GqlAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext,
		   ): Promise<boolean> {

    //const request = context.switchToHttp().getRequest();
    //return request.isAuthenticated();
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req
    console.log(req);
    return req.isAuthenticated();

}

}
*/
/*
@Injectable()
//export class SessionLocalAuthGuard extends AuthGuard('local') {
export class GqlAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctxRequest = GqlExecutionContext.create(context).getContext().req;
    //await super.logIn(ctxRequest);
    return ctxRequest ? true : false;
  }
}
*/

@Injectable()
//export class IsAuthenticated implements CanActivate {
export class GqlAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const ctxReq = GqlExecutionContext.create(context).getContext().req;
    const AuthenticationStatus = ctxReq.isAuthenticated();
    if (!AuthenticationStatus) {
      throw new UnauthorizedException("UNAUTHORIZED_ACCESS_MESSAGE");
    }
    return AuthenticationStatus;
  }
}
