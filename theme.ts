import {extendTheme} from 'native-base';

export const theme = extendTheme({
     colors: {
          primary: {
               50: '#FFEAEF',
               100: '#FFC4CC',
               200: '#FF9DA8',
               300: '#FF7584',
               400: '#FF4E60',
               500: '#FF263C', // primary color
          },
          secondary: {
               500: '#F5B642', // Secondary color (orange)
          },
     },
     fonts: {
          heading: 'Arial',
          body: 'Arial',
          mono: 'Arial',
     },
});
