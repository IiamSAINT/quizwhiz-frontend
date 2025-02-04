import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

const MainAppLayout = function () {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="relative w-full">
        <SidebarTrigger />
        <main className="w-full px-16">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainAppLayout;
