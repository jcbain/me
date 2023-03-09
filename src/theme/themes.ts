export interface Theme {
  name: string;
  values: {
    textColor: string;
    bgColor: string;
    linkColor: string;
    colorRed: string;
    colorOrange: string;
    colorYellow: string;
    colorGreen: string;
    colorBlue: string;
    colorViolet: string;
  };
}

const colors = {
  light: {
    red: "#cc241d",
    orange: "#fe8019",
    yellow: "#d79921",
    green: "#98971a",
    blue: "#458588",
    violet: "#8f3f71",
    black: "rgba(0, 0, 0, 0.7)",
    white: "#fffff7",
  },
};

export const defaultTheme: Theme = {
  name: "default",
  values: {
    textColor: colors.light.black,
    bgColor: colors.light.white,
    linkColor: colors.light.red,
    colorRed: colors.light.red,
    colorOrange: colors.light.orange,
    colorYellow: colors.light.yellow,
    colorGreen: colors.light.green,
    colorBlue: colors.light.blue,
    colorViolet: colors.light.violet,
  },
};

export const themes: [Theme] = [
  {
    name: "light",
    values: {
      ...defaultTheme.values,
    },
  },
];
