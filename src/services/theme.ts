export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

class ThemeProvider {
  public apply(theme: Themes) {
    document.documentElement.setAttribute('theme', theme);
  }
}

export const ThemeService = new ThemeProvider();
