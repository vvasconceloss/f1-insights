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
import { SiF1 } from "react-icons/si";

const data = {
  navMain: [
    {
      title: "Team",
      items: [
        {
          title: "Drivers",
          url: "drivers/all",
          isActive: false
        },
        {
          title: "Constructors",
          url: "constructors/all",
          isActive: true
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <SiF1 className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium text-xl">F1 Insights</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((menu) => (
              <SidebarMenuItem key={menu.title}>
                <SidebarMenuButton asChild>
                  <p className="font-medium">{menu.title}</p>
                </SidebarMenuButton>
                {menu.items?.length ? (
                  <SidebarMenuSub>
                    {menu.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
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