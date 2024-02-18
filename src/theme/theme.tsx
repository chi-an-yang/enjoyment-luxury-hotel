import { outlinedInputClasses } from '@mui/material';
import { ThemeOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    Display_100px_B: React.CSSProperties;
    H1_48px_B: React.CSSProperties;
    H2_40px_B: React.CSSProperties;
    H3_32px_B: React.CSSProperties;
    H4_28px_B: React.CSSProperties;
    H5_24px_B: React.CSSProperties;
    H6_20px_B: React.CSSProperties;
    Title_16px_B: React.CSSProperties;
    Subtitle_14px_B: React.CSSProperties;
    Body_16px_R: React.CSSProperties;
    Body2_14px_R: React.CSSProperties;
    Tiny_12px_R: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    Display_100px_B?: React.CSSProperties;
    H1_48px_B?: React.CSSProperties;
    H2_40px_B?: React.CSSProperties;
    H3_32px_B?: React.CSSProperties;
    H4_28px_B?: React.CSSProperties;
    H5_24px_B?: React.CSSProperties;
    H6_20px_B?: React.CSSProperties;
    Title_16px_B?: React.CSSProperties;
    Subtitle_14px_B?: React.CSSProperties;
    Body_16px_R?: React.CSSProperties;
    Body2_14px_R?: React.CSSProperties;
    Tiny_12px_R?: React.CSSProperties;
  }

  interface Palette {
    primary: Palette['primary'];
    hotelPrimary: {
      120: string;
      100: string;
      80: string;
      60: string;
      40: string;
      10: string;
      heroBorder: string;
    };
    neutral: {
      bgcolor: string;
      100: string;
      80: string;
      60: string;
      40: string;
      10: string;
      0: string;
      transparent30: string;
      transparent: string;
    };
  }

  interface PaletteOptions {
    primary?: PaletteOptions['primary'];
    hotelPrimary: {
      120: string;
      100: string;
      80: string;
      60: string;
      40: string;
      10: string;
      heroBorder: string;
    };
    neutral: {
      bgcolor: string;
      100: string;
      80: string;
      60: string;
      40: string;
      10: string;
      0: string;
      transparent30: string;
      transparent: string;
    };
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    Display_100px_B: true;
    H1_48px_B: true;
    H2_40px_B: true;
    H3_32px_B: true;
    H4_28px_B: true;
    H5_24px_B: true;
    H6_20px_B: true;
    Title_16px_B: true;
    Subtitle_14px_B: true;
    Body_16px_R: true;
    Body2_14px_R: true;
    Tiny_12px_R: true;
  }
}

const palette: ThemeOptions['palette'] = {
  primary: {
    light: '#D0B79F',
    main: '#BF9D7D',
    dark: '#7B6651',
    contrastText: '#fff',
  },
  // success: {
  //   light: '#BCFBBD',
  //   main: '#52DD7E',
  //   dark: '#299F65',
  //   // contrastText: '#fff',
  // },
  // info: {
  //   light: '#B1EFFD',
  //   main: '#3BADEF',
  //   dark: '#1D66AC',
  //   // contrastText: '#fff',
  // },
  // error: {
  //   light: '#F5CCD1',
  //   main: '#DA3E51',
  //   dark: '#C22538',
  //   // contrastText: '#fff',
  // },
  hotelPrimary: {
    120: '#7B6651',
    100: '#BF9D7D',
    80: '#D0B79F',
    60: '#E1D1C2',
    40: '#F1EAE4',
    10: '#F7F2EE',
    heroBorder: '#F5F7F9',
  },
  neutral: {
    bgcolor: '#140F0A',
    100: '#000000',
    80: '#4B4B4B',
    60: '#909090',
    40: '#ECECEC',
    10: '#F9F9F9',
    0: '#FFFFFF',
    transparent30: 'rgba(255, 255, 255, 0.3)',
    transparent: 'rgba(255, 255, 255, 0)',
  },
};

// 可參考 https://mui.com/material-ui/customization/theme-components/
// https://mui.com/material-ui/react-text-field/#using-the-theme-style-overrides-api
const components: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      // 對應到樣式 .css-xxxxxx-MuiButtonBase-root-MuiButton-root
      root: {
        fontSize: '16px',
        lineHeight: '24px',
        borderRadius: '8px',
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
        fontWeight: 700,
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
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        '&.hasBackground': {
          backgroundColor: palette.neutral[100],
        },
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
      },
    },
  },
};

const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: 'Noto Serif TC',

    // 依照設計稿擴充 variant
    // https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants
    Display_100px_B: {
      fontWeight: 700,
      fontSize: 100,
      lineHeight: '120px',
    },
    H1_48px_B: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: '57.6px',
    },
    H2_40px_B: {
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '48px',
    },
    H3_32px_B: {
      fontWeight: 700,
      fontSize: 32,
      lineHeight: '38.4px',
    },
    H4_28px_B: {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: '33.6px',
    },
    H5_24px_B: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '28.8px',
    },
    H6_20px_B: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '24px',
    },
    Title_16px_B: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '24px',
    },
    Subtitle_14px_B: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '21px',
    },
    Body_16px_R: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '24px',
    },
    Body2_14px_R: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '21px',
    },
    Tiny_12px_R: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '18px',
    },
  },
  palette,
  components,
});

export default theme;
