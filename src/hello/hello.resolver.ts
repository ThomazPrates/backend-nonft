import { Resolver, Query } from '@nestjs/graphql';


@Resolver()
export class HelloResolver {
  
  @Query(() => String)
  
  sayHello(): string {
    return process.env.HELLO;
  }
}
