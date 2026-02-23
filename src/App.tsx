import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ERPNext from "./pages/ERPNext";
import CRM from "./pages/CRM";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebApplication from "./pages/WebApplication";
import Odoo from "./pages/Odoo";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/erpnext" element={<ERPNext />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/web-application" element={<WebApplication />} />
          <Route path="/odoo" element={<Odoo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
