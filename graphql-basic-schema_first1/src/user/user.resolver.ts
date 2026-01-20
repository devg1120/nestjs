import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
//import { User } from '@prisma/client';
//import { IUser } from './user.interface';
import { UserService } from './user.service';
import { User as UserModel } from './user.model';
import { GetUserInput } from './dto/getUser.dto';
import { CreateUserInput } from './dto/createUser.dto';
import { UpdateUserPasswordInput } from './dto/updateUserPassword.dto';
import { DeleteUserInput } from './dto/deleteUser.dto';

/**
 * ユーザーリゾルバー
 */
@Resolver()
export class UserResolver {
    // DI
    constructor(private readonly userService: UserService) {}

    /**
     * ユーザー取得
     * @returns ユーザーデータ[]
     */
    @Query(() => [UserModel], { nullable: true })
    //async getUsers(): Promise<IUser[]> {
    async getUsers(): Promise<UserModel[]> {
	    console.log("getUsers");
        return await this.userService.getUsers();
    }

    @Query(() => UserModel, { nullable: false })
    async getUser(
        @Args('getUserInput') getUserInput: GetUserInput,
    //): Promise<IUser> {
    ): Promise<UserModel> {
	    console.log("getUser");
        return await this.userService.getUserById(getUserInput.id);
    }

    /**
     * ユーザーの追加
     * @param createUserInput 
     * @returns ユーザーデータ
     */
    @Mutation(() => UserModel)
    async createUser(
        @Args('createUserInput') createUserInput: CreateUserInput,
    //): Promise<IUser> {
    ): Promise<UserModel> {
        const user = await this.userService.createUser(createUserInput);
        //pubSub.publish('userCreated', { userCreated: user });
        return user;
    }

    /**
     * パスワードの更新
     * @param updateUserPasswordInput 
     * @returns ユーザーデータ
     */
    @Mutation(() => UserModel)
    async updatePassword(
        @Args('updateUserPasswordInput') updateUserPasswordInput: UpdateUserPasswordInput,
    //): Promise<IUser> {
    ): Promise<UserModel> {
        return await this.userService.updatePassword(updateUserPasswordInput);
    }

    /**
     * ユーザーの削除
     * @param deleteUserInput
     * @returns ユーザーデータ
     */
    @Mutation(() => UserModel)
    async deleteUser(
        @Args('deleteUserInput') deleteUserInput: DeleteUserInput,
    //): Promise<IUser> {
    ): Promise<UserModel> {
        return await this.userService.deleteUser(deleteUserInput);
    }
}

