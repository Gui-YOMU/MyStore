export const loginForm = {
  fields: [
    {
      name: "email",
      type: "mail",
      label: "Email",
      placeholder: "Entrez votre email",
      required: true
    },
    {
      name: "password",
      type: "password",
      label: "Mot de passe",
      placeholder: "Entrez votre mot de passe",
      required: true
    },
  ],
  button: "Se connecter",
};

export const signinForm = {
  fields: [
    {
      name: "username",
      type: "text",
      label: "Nom d'utilisateur",
      placeholder: "Entrez votre pseudo",
      required: true
    },
    {
      name: "email",
      type: "mail",
      label: "Email",
      placeholder: "Entrez votre email",
      required: true
    },
    {
      name: "password",
      type: "password",
      label: "Mot de passe",
      placeholder: "Entrez votre mot de passe",
      required: true
    },
  ],
  button: "S'inscrire",
};
