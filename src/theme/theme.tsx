import { outlinedInputClasses } from '@mui/material';
import { ThemeOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primary: Palette['primary'];
    neutral: {
      bgcolor: string;
      100: string;
      80: string;
      60: string;
      40: string;
      10: string;
      0: string;
    };
  }

  interface PaletteOptions {
    primary?: PaletteOptions['primary'];
    neutral: {
      bgcolor: string;
      100: string;
      80: string;
      60: string;
      40: string;
      10: string;
      0: string;
    };
  }
}

const palette: ThemeOptions['palette'] = {
  primary: {
    light: '#AE9984',
    main: '#BF9D7D',
    dark: '#7B6651',
    contrastText: '#fff',
  },
  neutral: {
    bgcolor: '#140F0A',
    100: '#000000',
    80: '#4B4B4B',
    60: '#909090',
    40: '#ECECEC',
    10: '#F9F9F9',
    0: '#FFFFFF',
  },
};

// 可參考 https://mui.com/material-ui/customization/theme-components/
// https://mui.com/material-ui/react-text-field/#using-the-theme-style-overrides-api
const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      // 對應到樣式 .css-xxxxxx-MuiButtonBase-root-MuiButton-root
      root: {
        fontWeight: 700,
        boxShadow: 'none',

        // 對應到樣式 .css-xxxxxx-MuiButtonBase-root-MuiButton-root:hover
        [`&:hover`]: {
          boxShadow: 'none',
        },

        // 對應到樣式 .css-xxxxxx-MuiButtonBase-root-MuiButton-root.Mui-disabled
        [`&.Mui-disabled`]: {
          backgroundColor: palette.neutral[40],
          color: palette.neutral[60],
        },
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      // notchedOutline 可參考: https://mui.com/material-ui/api/outlined-input/#OutlinedInput-classes-notchedOutline
      notchedOutline: {
        borderColor: palette.neutral[40],
      },

      // 對應到樣式 .css-xxxxxx-MuiInputBase-root-MuiOutlinedInput-root
      root: {
        backgroundColor: palette.neutral[0],
        fontWeight: 500,
        borderRadius: '8px',
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: palette.neutral[40],
        },
        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
          boxShadow: ' 0px 0px 0px 4px #BE9C7C1A',
        },
      },

      // 對應到樣式 .css-xxxxxx-MuiInputBase-input-MuiOutlinedInput-input
      input: {
        color: palette.neutral[80],
        '::placeholder': {
          color: palette.neutral[60],
          opacity: 1,
        },
      },
    },
  },
};

const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: 'Noto Serif TC',
  },
  palette,
  components,
});

export default theme;
