import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    // const email = req.user.email;

    if (!user) {
      throw new InternalServerErrorException('User not found in request');
    }
    console.log({ user });
    return !data ? user : user[data];
  },
);
