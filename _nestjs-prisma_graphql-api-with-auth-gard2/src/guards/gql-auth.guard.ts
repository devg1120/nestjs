import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GqlAuthGuard extends AuthGuard('session') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {

    
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    console.log(gqlReq.session);
    console.log(gqlReq.session.passport.user);

    /*
    const {
      LoginInput: { name, email },
    } = ctx.getArgs();
    gqlReq.body.email = email;
    gqlReq.body.name = name;
   */
    gqlReq.body.user = "XXX"
    //return gqlReq;
    return false;
  }
}
