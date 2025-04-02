import { z } from "zod";
import { paramGeneralSchema } from "../schemas/parameter.schema";

export type IParamGeneral = z.infer<typeof paramGeneralSchema>;
