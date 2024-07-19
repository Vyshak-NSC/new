import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type DetectionCreateInput = {
  details?: InputJsonValue;
  circleCount?: number | null;
  image?: ImageWhereUniqueInput | null;
};
