import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";

@Schema()
 export class Pokemon extends Document {

// id: string // Mongo me asigna un id por lo tanto no hay que ponerlo 
@Prop({
    unique: true,
    index: true
})
name: string;

@Prop({
    unique: true,
    index: true
})
no: number;  









}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon); 