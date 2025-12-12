import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import { ThemeProvider } from '@emotion/react';

// Theme Type Definitions
export interface Theme {
  colors: {
    // Primary brand colors
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    // Neutral colors
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    // Semantic colors
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    // Surface colors
    surface: {
      background: string;
      foreground: string;
      card: string;
      cardHover: string;
      overlay: string;
      elevated: string;
    };
    // Text colors
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      link: string;
      linkHover: string;
    };
    // Border colors
    border: {
      default: string;
      light: string;
      strong: string;
      focus: string;
    };
    // Component colors
    component: {
      buttonPrimary: string;
      buttonPrimaryHover: string;
      buttonSecondary: string;
      buttonSecondaryHover: string;
      input: string;
      inputBorder: string;
      inputFocus: string;
    };
  };
  typography: {
    fontFamily: {
      base: string;
      heading: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  spacing: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    24: string;
    32: string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    inner: string;
  };
  zIndex: {
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
  };
  transitions: {
    fast: string;
    base: string;
    slow: string;
  };
}

// Light Theme
export const lightTheme: Theme = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    surface: {
      background: '#ffffff',
      foreground: '#fafafa',
      card: '#ffffff',
      cardHover: '#f9fafb',
      overlay: 'rgba(0, 0, 0, 0.5)',
      elevated: '#ffffff',
    },
    text: {
      primary: '#171717',
      secondary: '#525252',
      tertiary: '#a3a3a3',
      inverse: '#ffffff',
      link: '#0ea5e9',
      linkHover: '#0284c7',
    },
    border: {
      default: '#e5e5e5',
      light: '#f5f5f5',
      strong: '#d4d4d4',
      focus: '#0ea5e9',
    },
    component: {
      buttonPrimary: '#0ea5e9',
      buttonPrimaryHover: '#0284c7',
      buttonSecondary: '#f5f5f5',
      buttonSecondaryHover: '#e5e5e5',
      input: '#ffffff',
      inputBorder: '#d4d4d4',
      inputFocus: '#0ea5e9',
    },
  },
  typography: {
    fontFamily: {
      base: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      heading:
        'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Dark Theme
export const darkTheme: Theme = {
  colors: {
    primary: {
      50: '#1e293b',
      100: '#334155',
      200: '#475569',
      300: '#64748b',
      400: '#94a3b8',
      500: '#0ea5e9',
      600: '#38bdf8',
      700: '#7dd3fc',
      800: '#bae6fd',
      900: '#e0f2fe',
    },
    neutral: {
      50: '#0a0a0a',
      100: '#171717',
      200: '#262626',
      300: '#404040',
      400: '#525252',
      500: '#737373',
      600: '#a3a3a3',
      700: '#d4d4d4',
      800: '#e5e5e5',
      900: '#f5f5f5',
      950: '#fafafa',
    },
    semantic: {
      success: '#22c55e',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
    },
    surface: {
      background: '#0a0a0a',
      foreground: '#171717',
      card: '#171717',
      cardHover: '#262626',
      overlay: 'rgba(0, 0, 0, 0.75)',
      elevated: '#262626',
    },
    text: {
      primary: '#fafafa',
      secondary: '#a3a3a3',
      tertiary: '#737373',
      inverse: '#171717',
      link: '#38bdf8',
      linkHover: '#7dd3fc',
    },
    border: {
      default: '#262626',
      light: '#171717',
      strong: '#404040',
      focus: '#38bdf8',
    },
    component: {
      buttonPrimary: '#0ea5e9',
      buttonPrimaryHover: '#38bdf8',
      buttonSecondary: '#262626',
      buttonSecondaryHover: '#404040',
      input: '#171717',
      inputBorder: '#404040',
      inputFocus: '#38bdf8',
    },
  },
  typography: {
    fontFamily: {
      base: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      heading:
        'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
  },
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Theme Context
type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const THEME_STORAGE_KEY = 'novel-app-theme';

// Get initial theme from localStorage or system preference
const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = localStorage.getItem(
    THEME_STORAGE_KEY,
  ) as ThemeMode | null;
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  // Fallback to system preference
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    return 'light';
  }

  return 'dark';
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error('useThemeContext must be used within ThemeProviderContext');
  return ctx;
};

export const ThemeProviderContext = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialTheme);

  const toggleTheme = () => {
    setMode((prev) => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_STORAGE_KEY, newMode);
      return newMode;
    });
  };

  // Sync with localStorage on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setMode(initialTheme);
  }, []);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
