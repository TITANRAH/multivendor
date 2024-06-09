import {  z } from "zod";

export const categorySchema = z.object({
  categoryName: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),
  categoryDescription: z.string().min(3, {
    message: "Este campo es obligatorio",
  }),
  slug: z.string().nullable()

});
