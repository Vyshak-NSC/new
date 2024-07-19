import { JsonValue } from "type-fest";
import { Image } from "../image/Image";

export type Detection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  details: JsonValue;
  circleCount: number | null;
  image?: Image | null;
};
