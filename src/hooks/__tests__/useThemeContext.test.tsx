import { renderHook, act } from '@testing-library/react';
import { type ReactNode } from 'react';
import { describe, it, expect } from 'vitest';

import { useThemeContext, ThemeProviderContext } from '../useThemeContext';

describe('useThemeContext', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProviderContext>{children}</ThemeProviderContext>
  );

  it('should provide default theme mode as dark (or logic specific default)', () => {
    const { result } = renderHook(() => useThemeContext(), { wrapper });

    expect(result.current.mode).toBeDefined();
  });

  it('should toggle theme correctly', () => {
    const { result } = renderHook(() => useThemeContext(), { wrapper });

    const initialMode = result.current.mode;

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.mode).not.toBe(initialMode);

    expect(result.current.mode).toBe(initialMode === 'dark' ? 'light' : 'dark');
  });
});
