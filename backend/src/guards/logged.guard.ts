import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

export default class LoggedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as Request;

    // Dummy authorization for faster development
    // JWT auth should be added in real world case
    // this is just a test

    if (req.headers.authorization.startsWith('authenticated')) return true;
    return false;
  }
}
