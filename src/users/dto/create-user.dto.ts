import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
  email: string;
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;
  @ApiProperty({ example: 'securepassword', description: 'The password of the user' })
  password: string;
}
