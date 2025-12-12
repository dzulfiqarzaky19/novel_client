import '@emotion/react';
import type { Theme as CustomTheme } from './hooks/useThemeContext';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
