import z from "zod";

export const productSchema = z.object({
  title: z
    .string({
      error: "Ce champ est requis.",
    })
    .regex(/^[a-zA-Z0-9À-ÿ '-]+$/, "Entrez un nom de produit valide."),
  price: z.coerce.number().positive("Le prix doit être supérieur à 0."),
  description: z
    .string()
    .regex(/^[a-zA-Z0-9À-ÿ '-]*$/, "Entrez une description valide.")
    .optional(),
  category: z
    .string()
    .nullable()
    .transform((value) => value ?? "")
    .pipe(z.string().min(1, "Veuillez choisir une catégorie.")),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Une image est requise.")
    .transform((files) => files[0])
    .pipe(z.file().mime(["image/png", "image/jpeg"])),
});
