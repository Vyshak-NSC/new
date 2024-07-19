import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type DetectionWhereInput = {
  id?: StringFilter;
  details?: JsonFilter;
  circleCount?: IntNullableFilter;
  image?: ImageWhereUniqueInput;
};
