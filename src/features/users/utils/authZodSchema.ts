import z from "zod";

export const loginSchema = z.object({
  email: z.email("Email invalide"),
  password: z
    .string({
      error: "Ce champ est requis",
    })
    .regex(/.{8,}/, "Mot de passe invalide"),
});

export const signinSchema = z.object({
  username: z
    .string({
      error: "Ce champ est requis",
    })
    .regex(/[A-Za-z\d\_\-\.]{3,32}/, "Nom d'utilisateur invalide"),
  email: z.email("Email invalide"),
  password: z
    .string({
      error: "Ce champ est requis",
    })
    .regex(/.{8,}/, "Mot de passe invalide"),
});
