/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core palette
        surface: {
          DEFAULT: '#f7f6f2',
          dark: '#111210',
        },
        teal: {
          DEFAULT: '#01696f',
          light: '#018b93',
          dark: '#014d52',
        },
        ink: {
          DEFAULT: '#1a1a18',
          muted: '#4a4a45',
          subtle: '#7a7a72',
        },
        border: {
          DEFAULT: '#e0dfd8',
          dark: '#2a2a27',
        },
        error: '#c0392b',
        warning: '#d4850a',
        success: '#01696f',
        // Dark mode surfaces
        night: {
          50: '#1e1e1b',
          100: '#252522',
          200: '#2e2e2a',
          300: '#3a3a35',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        // 4px base unit grid
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        18: '72px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
      },
      minHeight: {
        touch: '44px',
      },
      maxHeight: {
        preview: '540px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.06)',
        input: '0 0 0 3px rgba(1,105,111,0.18)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
};
