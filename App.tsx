import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigator from './src/navigation/RootNavigator';

const queryClient = new QueryClient();

const App = () => (
     <QueryClientProvider client={queryClient}>
          <RootNavigator />
     </QueryClientProvider>
);

export default App;
