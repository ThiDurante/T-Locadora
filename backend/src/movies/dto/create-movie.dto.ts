import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsString({ each: true })
  @IsNotEmpty()
  genres: string[];

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;

  @IsString()
  @IsNotEmpty()
  rentalPrice: string;

  @IsString()
  inUse = '0';

  @IsString()
  likes = '0';

  @IsString()
  dislikes = '0';

  available = true;

  @IsString()
  timesRented = '0';
}
