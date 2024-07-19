import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type DetectionUpdateInput = {
  details?: InputJsonValue;
  circleCount?: number | null;
  image?: ImageWhereUniqueInput | null;
};
