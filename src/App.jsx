import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";
import { ThemeProvider } from 'styled-components';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { GlobalTheme } from "./theme"; // Assuming you are importing a global theme from theme.js

const queryClient = new QueryClient();

function App() {
  const theme = GlobalTheme; // Assign your global theme to the theme variable <Route  path="/starred" element={<Starred />} />

  return (
    <GlobalTheme>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
             
              
            </Route>
            <Route path="/show/:showId" element={<Show />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </GlobalTheme>
  );
}

export default App;
