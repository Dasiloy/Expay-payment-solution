const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#00ff00', '#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

export const light = {
  mode: 'light',
  cardShadow: 'rgba(23, 70, 161, 0.11)',
  divider: 'rgba(0, 0, 0, 0.12)',
  modal: 'rgba(0, 0, 0, 0.4)',
  alternate: {
    light: '#FAFAFA',
    main: '#00A5D6',
    dark: '#F5F8FF',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#00A5D6',
    contrastText: '#fff',
  },
  secondary: {
    main: '#F5F8FF',
    contrastText: '#fff',
  },
  chart: CHART_COLORS,
  text: {
    primary: 'rgba(0,0,0,0.87)',
    secondary: 'rgba(0,0,0,0.6)',
    dashed: 'rgba(0,0,0,0.50)',
    link: '#7D849D',
  },
  dashed: {
    main: 'rgba(0,0,0,0.50)',
  },
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level1: '#ffffff',
    level2: '#f5f5f5',
  },
};

export const dark = {
  mode: 'dark',
  cardShadow: 'rgba(0, 0, 0, 0.11)',
  divider: 'rgba(255, 255, 255, 0.12)',
  modal: 'rgba(0, 0, 0, 0.4)',
  alternate: {
    light: '#00a6e6',
    dark: '#009ae3',
    main: '#00a0dd',
  },
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#0094e8',
    contrastText: 'rgba(0,0,0,0.87)',
  },
  secondary: {
    main: '#00a5d6',
    contrastText: 'rgba(0,0,0,0.87)',
  },
  chart: CHART_COLORS,
  text: {
    primary: '#fff',
    secondary: '#f1f1f1',
    dashed: 'rgba(255,255,255,0.4)',
    link: 'f1f1f1',
  },
  dashed: {
    main: 'rgba(255,255,255,0.4)',
  },
  background: {
    paper: '#121212',
    default: '#121212',
    level1: '#121212',
    level2: '#131313',
  },
};
