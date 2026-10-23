export const addProductForm = (categories: string[]) => ({
  fields: [
    {
      name: "title",
      type: "text",
      label: "Nom du produit",
      placeholder: "Entrez un produit",
      required: true
    },
    {
      name: "price",
      type: "number",
      step: 0.01,
      label: "Prix",
      placeholder: "Entrez son prix",
      required: true
    },
    {
      name: "description",
      type: "text",
      label: "Description du produit",
      placeholder: "Entrez sa description",
      required: false
    },
    {
      name: "category",
      type: "radio",
      options: categories,
      label: "Catégorie",
      placeholder: "",
      required: true
    },
    {
      name: "image",
      type: "file",
      label: "Image",
      placeholder: "",
      required: true
    },
  ],
  button: "Ajouter le produit",
});