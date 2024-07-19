/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DetectionWhereInput } from "./DetectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DetectionOrderByInput } from "./DetectionOrderByInput";

@ArgsType()
class DetectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DetectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DetectionWhereInput, { nullable: true })
  @Type(() => DetectionWhereInput)
  where?: DetectionWhereInput;

  @ApiProperty({
    required: false,
    type: [DetectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DetectionOrderByInput], { nullable: true })
  @Type(() => DetectionOrderByInput)
  orderBy?: Array<DetectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DetectionFindManyArgs as DetectionFindManyArgs };