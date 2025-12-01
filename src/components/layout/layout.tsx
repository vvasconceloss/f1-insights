import { Separator } from "../ui/separator";
import { AppSidebar } from "@/components/sidebar/appSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = ({ children, current_menu }: { children: React.ReactNode, current_menu: string }) => {
  return (
    <SidebarProvider>
      <AppSidebar current_menu={current_menu} />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-5">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <main className="p-5">
          { children }
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout;