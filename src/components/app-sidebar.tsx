import { ChartPie, Home, Inbox, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import AppSidebarMenuItem from "./AppSidebarMenuItem";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My Quizzes",
    url: "my_quiz",
    icon: Inbox,
  },
  {
    title: "Analytics",
    url: "analytics",
    icon: ChartPie,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-2xl">Quiz Whizz</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <AppSidebarMenuItem item={item} key={item.title} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
