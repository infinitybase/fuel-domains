import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { defaultConnectors } from '@fuels/connectors';
import { FuelProvider } from '@fuels/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { InnerApp } from './components';
import { defaultTheme } from './theme/default.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <FuelProvider
          fuelConfig={{
            connectors: defaultConnectors({ devMode: true }),
          }}
        >
          <ColorModeScript initialColorMode="dark" />
          <InnerApp />
        </FuelProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
