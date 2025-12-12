import { Global, css } from '@emotion/react';
import type { Theme } from './hooks/useThemeContext';

export const GlobalStyles = () => (
    <Global
        styles={(theme: Theme) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        font-family: ${theme.typography.fontFamily.base};
        line-height: ${theme.typography.lineHeight.normal};
        font-weight: ${theme.typography.fontWeight.normal};
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.surface.background};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
      }

      body {
        min-width: 320px;
        min-height: 100vh;
        margin: 0;
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.surface.background};
        transition: background-color ${theme.transitions.base}, color ${theme.transitions.base};
      }

      /* Typography */
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${theme.typography.fontFamily.heading};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.tight};
        color: ${theme.colors.text.primary};
      }

      h1 {
        font-size: ${theme.typography.fontSize['4xl']};
      }

      h2 {
        font-size: ${theme.typography.fontSize['3xl']};
      }

      h3 {
        font-size: ${theme.typography.fontSize['2xl']};
      }

      h4 {
        font-size: ${theme.typography.fontSize.xl};
      }

      h5 {
        font-size: ${theme.typography.fontSize.lg};
      }

      h6 {
        font-size: ${theme.typography.fontSize.base};
      }

      p {
        line-height: ${theme.typography.lineHeight.relaxed};
        color: ${theme.colors.text.secondary};
      }

      /* Links */
      a {
        color: ${theme.colors.text.link};
        text-decoration: none;
        font-weight: ${theme.typography.fontWeight.medium};
        transition: color ${theme.transitions.fast};
      }

      a:hover {
        color: ${theme.colors.text.linkHover};
      }

      a:focus-visible {
        outline: 2px solid ${theme.colors.border.focus};
        outline-offset: 2px;
        border-radius: ${theme.borderRadius.sm};
      }

      /* Buttons */
      button {
        font-family: ${theme.typography.fontFamily.base};
        font-size: ${theme.typography.fontSize.base};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        border-radius: ${theme.borderRadius.lg};
        border: 1px solid transparent;
        padding: ${theme.spacing[2]} ${theme.spacing[4]};
        background-color: ${theme.colors.component.buttonPrimary};
        color: ${theme.colors.text.inverse};
        cursor: pointer;
        transition: all ${theme.transitions.fast};
        box-shadow: ${theme.shadows.sm};
      }

      button:hover {
        background-color: ${theme.colors.component.buttonPrimaryHover};
        box-shadow: ${theme.shadows.md};
        transform: translateY(-1px);
      }

      button:active {
        transform: translateY(0);
        box-shadow: ${theme.shadows.sm};
      }

      button:focus-visible {
        outline: 2px solid ${theme.colors.border.focus};
        outline-offset: 2px;
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
      }

      /* Form Elements */
      input,
      textarea,
      select {
        font-family: ${theme.typography.fontFamily.base};
        font-size: ${theme.typography.fontSize.base};
        line-height: ${theme.typography.lineHeight.normal};
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.component.input};
        border: 1px solid ${theme.colors.component.inputBorder};
        border-radius: ${theme.borderRadius.md};
        padding: ${theme.spacing[2]} ${theme.spacing[3]};
        transition: all ${theme.transitions.fast};
      }

      input:focus,
      textarea:focus,
      select:focus {
        outline: none;
        border-color: ${theme.colors.component.inputFocus};
        box-shadow: 0 0 0 3px ${theme.colors.component.inputFocus}33;
      }

      input::placeholder,
      textarea::placeholder {
        color: ${theme.colors.text.tertiary};
      }

      /* Code */
      code,
      pre {
        font-family: ${theme.typography.fontFamily.mono};
        font-size: ${theme.typography.fontSize.sm};
        background-color: ${theme.colors.surface.foreground};
        border-radius: ${theme.borderRadius.sm};
      }

      code {
        padding: ${theme.spacing[1]} ${theme.spacing[2]};
      }

      pre {
        padding: ${theme.spacing[4]};
        overflow-x: auto;
      }

      /* Scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: ${theme.colors.surface.background};
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.neutral[400]};
        border-radius: ${theme.borderRadius.full};
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.neutral[500]};
      }

      /* Selection */
      ::selection {
        background-color: ${theme.colors.primary[500]}44;
        color: ${theme.colors.text.primary};
      }

      /* Utilities */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    `}
    />
);