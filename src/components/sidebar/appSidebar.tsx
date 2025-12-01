import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router";
import { SiF1 } from "react-icons/si";

const data = {
  menus: [
    {
      title: "Teams",
      items: [
        {
          title: "Drivers",
          url: "/team/drivers/all",
        },
        {
          title: "Constructors",
          url: "/team/constructors/all",
        },
      ],
    },
  ],
}

export function AppSidebar({ current_menu, ...props }: { current_menu: string }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to={"/"}>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <SiF1 className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">F1 Insights</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.menus.map((menu) => (
              <SidebarMenuItem key={menu.title}>
                <SidebarMenuButton asChild>
                  <p className="font-medium">{menu.title}</p>
                </SidebarMenuButton>
                {menu.items?.length ? (
                  <SidebarMenuSub>
                    {menu.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton 
                          asChild
                          className={`
                            transition-all ease-in-out ${current_menu == item.title 
                            ? 'text-zinc-200 bg-zinc-950 hover:bg-zinc-950 hover:text-zinc-200' 
                            : 'hover:bg-zinc-300'}`}
                        >
                          <Link to={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}