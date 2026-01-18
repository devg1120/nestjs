import { Injectable, NotFoundException } from '@nestjs/common';
//import { User } from '@prisma/client';
import { IUser } from './iuser';
//import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInput } from './dto/createUser.dto';
import { UpdateUserPasswordInput } from './dto/updateUserPassword.dto';
import { DeleteUserInput } from './dto/deleteUser.dto';

//import datetime from 'datetime';

//import { User } from './user.model';

/*
from datetime import datetime

t1 = datetime.now()

t1.isoformat()
 '2020-05-08T22:16:39.287433'

t1.isoformat(" ")
 '2020-05-08 22:16:39.287433'
*/

const Users : IUser[] = [
  {
  id: 1,
  name: "devg1120",
  email: "devg1120@gmail.com",
  password: "test",
  createdAt: new Date('2020-05-08T22:16:39'),
  updatedAt: new Date('2020-05-08T22:16:39'),
  },
  {
  id: 2,
  name: "alice",
  email: "alice@gmail.com",
  password: "test",
  createdAt: new Date('2020-05-08T22:16:39'),
  updatedAt: new Date('2020-05-08T22:16:39'),
  },
  {
  id: 3,
  name: "bob",
  email: "bob@gmail.com",
  password: "test",
  createdAt: new Date('2020-05-08T22:16:39'),
  updatedAt: new Date('2020-05-08T22:16:39'),
  },
];


let max_id  = 3;


/**
 * ユーザーサービス
 */
@Injectable()
export class UserService {
    // コンストラクタにDI
    //constructor(private readonly prismaService: PrismaService) {}
    constructor() {}

    /**
     * ユーザー全取得
     * @returns ユーザーデータ配列
     */
    async getUsers(): Promise<IUser[]> {
        //return await this.prismaService.user.findMany();
        return  Users;
    }

    /**
     * ユーザー取得
     * @param email
     * @returns ユーザーデータ
     */
    async getUser(
        email: string,
    ): Promise<IUser> {
        //return await this.prismaService.user.findUnique({
        //    where: { email },
        //});
	for ( let i = 0 ; i < Users.length ; i++) {
           if ( email == Users[i].email ) {
                  return  await Users[i];
	   }
	}

	return await Users[0]
    }

    /**
     * ユーザー追加
     * @param createUserInput 
     * @returns ユーザーデータ
     */
    async createUser(
        createUserInput: CreateUserInput,
    ): Promise<IUser> {
        const {name, email, password} = createUserInput;
        
        //return await this.prismaService.user.create({
        //    data: {
        //        name,
        //        email,
        //        password,
        //    }
        //});
	
	max_id ++;
	//let t1 = Date.now();
        let t1 =  new Date('2020-05-08T22:16:39');
	let user:IUser = {
                    //id:String(max_id) ,
                    id:max_id ,
                    name: name,
                    email: email,
                    password: password,
                    createdAt: t1,
                    updatedAt: t1,
	};

	Users.push(user);
        return await user;
    }

    /**
     * パスワードの更新
     * @param updateUserPasswordInput 
     * @returns ユーザーデータ
     */
    async updatePassword(
        updateUserPasswordInput: UpdateUserPasswordInput,
    ): Promise<IUser> {
        const {email, password, newPassword} = updateUserPasswordInput;
        
        // ユーザー存在有無確認
        const user = await this.getUser(email!);
        // パスワード確認
        if (user.password !== password) {
            throw new NotFoundException('パスワードが一致しませんでした');
        }
        /*
        // パスワード更新
        return await this.prismaService.user.update({
            data: {
                password: newPassword
            },
            where: { email },
        });
       */
       user.password = newPassword!;
       return await user;
    }

    /**
     * ユーザー削除
     * @param deleteUserInput
     * @returns ユーザーデータ
     */
    async deleteUser(
        deleteUserInput: DeleteUserInput,
    ): Promise<IUser> {
        const {email} = deleteUserInput;
        
        //return await this.prismaService.user.delete({
        //    where: {email},
        //});
	
       const user = await this.getUser(email);
       Users.splice(Users.indexOf(user), 1);
       return await user;
    }
}

