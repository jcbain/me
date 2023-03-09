export interface Theme {
  name: string;
  values: {
    textColor: string;
  };
}

export const themes: [Theme] = [
  {
    name: "light",
    values: {
      textColor: "green",
    },
  },
];

export const defaultTheme: Theme = {
  name: "default",
  values: {
    textColor: "purple",
  },
};
