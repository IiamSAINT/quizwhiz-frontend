import { Toaster } from '@/common/components/ui/toaster';
import { Toaster as Sonner } from '@/common/components/ui/sonner';
import { TooltipProvider } from '@/common/components/ui/tooltip';
import { QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from '@/features/auth/AuthProvider';
import queryClient from './queryClient';

interface ProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<ProvidersProps> = ({ children }) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner closeButton={true} pauseWhenPageIsHidden={true} position='top-center' />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default AppProviders;
