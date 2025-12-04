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

const data = {
  menus: [
    {
      title: "Insights",
      items: [
        {
          title: "Dashboard",
          url: "/"
        }
      ]
    },
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
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold text-xl text-[#15151E]">F1 Insights</span>
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
                  <p className="font-medium text-[#15151E]">{menu.title}</p>
                </SidebarMenuButton>
                {menu.items?.length ? (
                  <SidebarMenuSub>
                    {menu.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton 
                          asChild
                          className={`
                            text-[#15151E] rounded-none border-l-2 border-transparent transition-all ease-in-out ${current_menu == item.title 
                            ? 'border-l-[#FF1E00]' 
                            : 'hover:border-l-[#FF1E00]'}`}
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