import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

//import { AuthService } from './auth.service';
//import { LocalStrategy } from '../common/localStrategy.js';

import { User } from './user.interface.js';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class AuthSerializer extends PassportSerializer {
    constructor(private readonly prismaService: PrismaService) {
        super();
    }
    //serializeUser(user: User, done: (err: Error, user: { id: string; employee_number: string }) => void) {
    serializeUser(user: User, done: (err: any, user: { id: string; employee_number: string }) => void) {
        console.log("== call serializeUser ==");

        done(null, { id: user.id, 
	             //name: user.name, 
		     employee_number: user.employee_number, 
		     //role: user.role 
	           });
    }

    async deserializeUser(payload: { 
	    id: string, 
	    employee_number: string
            //}  , done: (err: Error, user: Omit<User, 'password'>) => void) {
            }  , done: (err: any, user: any) => void) {
        console.log("== call deserializeUser ==");

        //const user = await this.authService.findById(payload.id);
        const user = await this.prismaService.user.findUnique({
         where: { employee_number : payload.employee_number },
        });
/*
        const user = await this.prismaService.user.findUnique({
            where: {
                id: id
            }
        })
       */
        done(null, user);

    }
}

