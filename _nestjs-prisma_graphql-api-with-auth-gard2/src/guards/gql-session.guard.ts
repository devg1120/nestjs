
import { Injectable, CanActivate, ExecutionContext, 
UnauthorizedException, } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
//export class GqlSessionGuard extends AuthGuard('session') implements CanActivate {
export class GqlSessionGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<any> {
    const ctxReq = GqlExecutionContext.create(context).getContext().req;
    console.log(ctxReq.body.user);
    console.log(ctxReq.session.user);
    //console.log(ctxReq.sessionID);
   // console.log(ctxReq.session);
    const AuthenticationStatus = ctxReq.isAuthenticated();
    console.log("AuthenticationStatus", AuthenticationStatus);
    if (!AuthenticationStatus) {
      throw new UnauthorizedException("UNAUTHORIZED_ACCESS_MESSAGE");
    }
    return AuthenticationStatus;
   
  }
}

