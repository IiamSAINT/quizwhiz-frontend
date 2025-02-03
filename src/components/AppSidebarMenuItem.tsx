import { NavLink } from "react-router-dom";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { LucideProps } from "lucide-react";

type MenuItemType = {
  title: string;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const AppSidebarMenuItem = ({ item }: { item: MenuItemType }) => {
  const { title, url } = item;
  return (
    <SidebarMenuItem>
      <NavLink to={url}>
        {/* Passing the isActive Props as Render props to SidebarMenuButton */}
        {({ isActive }) => (
          <SidebarMenuButton asChild className="h-14" isActive={isActive}>
            <button>
              <item.icon />
              <span>{title}</span>
            </button>
          </SidebarMenuButton>
        )}
      </NavLink>
    </SidebarMenuItem>
  );
};

export default AppSidebarMenuItem;
