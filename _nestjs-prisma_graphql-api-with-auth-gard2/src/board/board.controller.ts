import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Req,
  Res,
} from '@nestjs/common';
//import { LogInBoardDto } from './dto/loginBoard.dto.js';
import { ApiTags } from '@nestjs/swagger';
//import { LocalStrategy } from '../common/localStrategy.js';
import { BoardService } from './board.service.js';
import { PostService } from './post.service.js';
import { Board as BoardModel } from '../generated/prisma/client.js';
import { Post as PostModel } from '../generated/prisma/client.js';


@ApiTags('login')
@Controller()
export class BoardController {
  constructor(
    private readonly BoardService: BoardService,
    private readonly postService: PostService,
  ) {}

  @Get('post/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel | null> {
    return this.postService.post({ id: Number(id) });
  }

  @Get('feed')
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true },
    });
  }

  @Get('filtered-posts/:searchString')
  async getFilteredPosts(
    @Param('searchString') searchString: string,
  ): Promise<PostModel[]> {
    return this.postService.posts({
      where: {
        OR: [
          {
            title: { contains: searchString },
          },
          {
            content: { contains: searchString },
          },
        ],
      },
    });
  }

  @Post('post')
  async createDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string },
  ): Promise<PostModel> {
    const { title, content, authorEmail } = postData;
    return this.postService.createPost({
      title,
      content,
      board: {
        connect: { email: authorEmail },
      },
    });
  }
  
 /*
  @Post('post')
  async createDraft(
    @Body() postData: { title: string; content?: string;  },
  ): Promise<PostModel> {
    const { title, content  } = postData;
    return this.postService.createPost({
      title,
      content,
    });
  }
*/
  @Post('board')
  async signupBoard(
    //@Body() userData: { name?: string;  },
    @Body() userData: { name?: string; email: string },
  ): Promise<BoardModel> {
    return this.BoardService.createBoard(userData);
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }

  @Delete('post/:id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}

/*
@ApiTags('login')
@Controller()
export class BoardController {
  constructor(private localStrategy: LocalStrategy) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async logIn(
    @Body() logInBoardDto: LogInBoardDto,
    @Req() request: any,
    @Res() response: any,
  ) {
    const user = await this.localStrategy.validate(
      logInBoardDto.employee_number,
      logInBoardDto.password,
    );
    request.session.user = user;
    response.status(HttpStatus.OK).json({ name: user.name, role: user.role });
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  //async logout(@Req() request: any, @Res() response: any): Promise<void> {
  async logout(@Req() request: any,): Promise<void> {
	  console.log("----  logout");
//	  console.dir(request);
    request.session.destroy();
    //response.clearCookie('connect.sid'); 

  }
}

*/
