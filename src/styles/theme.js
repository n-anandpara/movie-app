import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00E0FF'
    },
    text: {
        primary: '#D4D7DD',
        secondary: '#FFFFFF',
        disabled: '#D4D7DD',
        icon: '#D4D7DD',
    },
    background: {
        paper: '#394B61',
        default: '#273244'
    },
    divider: '#394b61'
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          border: '1px solid 1px solid #394B61',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '10px',
          borderRadius: '11px'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#D4D7DD'
        },
        containedPrimary: {
          color: '#000000',
          background: '#00E0FF',
          fontWeight: 700,
          textTransform: 'capitalize',
          borderRadius: '5px',
          minWidth: '154px'
        },
        outlinedPrimary: {
          color: '#00E0FF',
          fontWeight: 700,
          textTransform: 'capitalize',
          borderRadius: '5px',
          minWidth: '154px'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0',
          color: '#D4D7DD'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          padding: '0'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: '31px',
          padding: 0,
          color: '#D4D7DD'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#394B61',
          color: '#FFFFFF'
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        bar1Buffer: {
          backgroundColor: '#00E0FF'
        }
      }
    }
  }
});

export default darkTheme;
