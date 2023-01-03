import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// npm i @tanstack/react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// npm i @tanstack/react-query-devtools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
// npm install json-server
// npm i axios
// npm i react-router-dom
import {BrowserRouter} from 'react-router-dom'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
