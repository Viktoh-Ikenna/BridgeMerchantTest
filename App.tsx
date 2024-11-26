import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigator from './src/navigation/RootNavigator';
import {NativeBaseProvider} from 'native-base';
import {theme} from './theme';

const queryClient = new QueryClient();

const App = () => (
     <QueryClientProvider client={queryClient}>
          <NativeBaseProvider theme={theme}>
               <RootNavigator />
          </NativeBaseProvider>
     </QueryClientProvider>
);

export default App;
