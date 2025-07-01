import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Project from "@/pages/Project";
import NotFound from "@/pages/not-found";

// Get base path for GitHub Pages deployment
const getBasePath = () => {
  // In production (GitHub Pages), use /GoParking/
  // In development, use /
  return import.meta.env.PROD ? "/GoParking" : "";
};

function AppRouter() {
  return (
    <Router base={getBasePath()}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/project" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
