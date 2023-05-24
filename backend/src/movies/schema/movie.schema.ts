import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  genres: string[];

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  quantity: string;

  @Prop({ required: true })
  rentalPrice: string;

  @Prop({ required: false })
  inUse: string;

  @Prop({ required: false })
  likes: string;

  @Prop({ required: false })
  dislikes: string;

  @Prop({ required: false })
  available: boolean;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
