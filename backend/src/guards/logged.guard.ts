import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export default class LoggedGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest() as Request;

    const isPublic = this.reflector.getAllAndOverride<boolean | undefined>(
      'Public',
      [context.getHandler(), context.getClass()],
    );

    if (isPublic) return true;

    // Dummy authorization for faster development
    // JWT auth should be added in real world case
    // this is just a test

    if (!req.headers.authorization) return false;
    if (req.headers.authorization.startsWith('authenticated')) return true;
    return false;
  }
}
