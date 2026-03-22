import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();
const getRouterBaseName = () => {
  if (typeof window === "undefined") {
    return import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
  }

  if (!window.location.hostname.endsWith("github.io")) {
    return "/";
  }

  const [repoName] = window.location.pathname.split("/").filter(Boolean);
  return repoName ? `/${repoName}` : "/";
};

const routerBaseName = getRouterBaseName();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBaseName}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
