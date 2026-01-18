import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
//import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      //autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },


      playground: true,
      /*
      cors: {
        //origin: ['http://localhost:3000'], // TODO: 環境変数経由で呼ぶようにしたい
        origin: "*", // TODO: 環境変数経由で呼ぶようにしたい
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
        methods: "*"
      },
*/
    }),
    //PrismaModule,
    UserModule,    
  ],
})
export class AppModule {}
