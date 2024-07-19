/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImageService } from "../image.service";
import { ImageCreateInput } from "./ImageCreateInput";
import { Image } from "./Image";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageUpdateInput } from "./ImageUpdateInput";
import { DetectionFindManyArgs } from "../../detection/base/DetectionFindManyArgs";
import { Detection } from "../../detection/base/Detection";
import { DetectionWhereUniqueInput } from "../../detection/base/DetectionWhereUniqueInput";

export class ImageControllerBase {
  constructor(protected readonly service: ImageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Image })
  async createImage(@common.Body() data: ImageCreateInput): Promise<Image> {
    return await this.service.createImage({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        url: true,
        detectionResult: true,
        uploadedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Image] })
  @ApiNestedQuery(ImageFindManyArgs)
  async images(@common.Req() request: Request): Promise<Image[]> {
    const args = plainToClass(ImageFindManyArgs, request.query);
    return this.service.images({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        url: true,
        detectionResult: true,
        uploadedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async image(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    const result = await this.service.image({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        url: true,
        detectionResult: true,
        uploadedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateImage(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() data: ImageUpdateInput
  ): Promise<Image | null> {
    try {
      return await this.service.updateImage({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          url: true,
          detectionResult: true,
          uploadedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteImage(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    try {
      return await this.service.deleteImage({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          url: true,
          detectionResult: true,
          uploadedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/detections")
  @ApiNestedQuery(DetectionFindManyArgs)
  async findDetections(
    @common.Req() request: Request,
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Detection[]> {
    const query = plainToClass(DetectionFindManyArgs, request.query);
    const results = await this.service.findDetections(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        details: true,
        circleCount: true,

        image: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/detections")
  async connectDetections(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() body: DetectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      detections: {
        connect: body,
      },
    };
    await this.service.updateImage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/detections")
  async updateDetections(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() body: DetectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      detections: {
        set: body,
      },
    };
    await this.service.updateImage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/detections")
  async disconnectDetections(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() body: DetectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      detections: {
        disconnect: body,
      },
    };
    await this.service.updateImage({
      where: params,
      data,
      select: { id: true },
    });
  }
}
