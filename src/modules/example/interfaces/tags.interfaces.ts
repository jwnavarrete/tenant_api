import { z } from "zod";
import * as tagsSchemas from "../schemas/tags.schemas";

export interface iTagsCreateList {
  name: string;
}

export type iTagsCreate = z.infer<typeof tagsSchemas.CreateTagsSchema>;
export type iTagsDelete = z.infer<typeof tagsSchemas.DeleteTagsSchema>;
