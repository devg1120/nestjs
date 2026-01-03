import { Injectable, CanActivate, ExecutionContext, 
UnauthorizedException, } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext,
		   ): Promise<boolean> {
/*
    const ctx = GqlExecutionContext.create(context);
    const request = request.req; 
    const session = request.session; 
    const sessionID = request.sessionID; 
    console.dir(user);
    console.dir(sessionID);
    /console.dir(session);
    
   return  false
*/
    console.log(context);
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req; // GraphQLコンテキストからリクエストを取得
    //console.log(request);
    const user = request.user; 
    const session = request.session; 
    const sessionID = request.sessionID; 
    console.dir(user);
    console.dir(session);
    // リクエストにユーザー情報があれば認証済み
    console.log(request.isAuthenticated());
    //return request.isAuthenticated();
    return false;
}

}

