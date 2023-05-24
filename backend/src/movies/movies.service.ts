import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schema/movie.schema';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}
  create(createMovieDto: CreateMovieDto) {
    return this.movieModel.create(createMovieDto);
  }

  findAll() {
    return this.movieModel.find();
  }

  findOne(id: number) {
    return this.movieModel.findById(id);
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.updateOne({ _id: id }, updateMovieDto);
  }

  remove(id: number) {
    return this.movieModel.deleteOne({ _id: id });
  }
}
