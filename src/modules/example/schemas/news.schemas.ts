import { z } from "zod";
import { listCommentsReturn } from "./comments.schemas";
export const typeOptions: any = [
  "Outros",
  "Política",
  "Economia",
  "Cultura",
  "Segurança",
  "Saúde",
  "Educação",
  "Esportes",
  "Tecnologia",
];
export const NewsSchema = z.object({
  id: z.number().positive().int(),
  title: z.string().max(80),
  subTitle: z.string().max(200),
  content: z.string(),
  type: z.enum(typeOptions),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  authorId: z.number(),
});

export const NewsCreateSchema = NewsSchema.omit({
  id: true,
  published: true,
  createdAt: true,
  updatedAt: true,
  authorId: true,
}).extend({
  tags: z.array(z.string().max(30)),
});

export const NewsUpdateSchema = NewsCreateSchema.partial();

const authorSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(80),
  email: z.string().email().max(80),
});

const tags = z.object({
  id: z.number().positive().int(),
  tag: z.object({
    id: z.number().positive().int(),
    name: z.string().max(30),
  }),
});

export const ReturnNewsCreatedSchema = NewsSchema.extend({
  author: authorSchema,
  tagsList: tags.array(),
  commentsList: listCommentsReturn,
}).omit({
  authorId: true,
});

export const ReturnListNewsSchema = ReturnNewsCreatedSchema.array();
