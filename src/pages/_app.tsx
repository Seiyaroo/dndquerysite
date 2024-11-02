import '../styles/globals.css'
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {AppProps} from "next/app";
import Layout from "@/components/Layout";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
   return (
       <QueryClientProvider client={queryClient}>
           <Layout>
               <Component {...pageProps} />
           </Layout>
       </QueryClientProvider>
   )
}

export default App;