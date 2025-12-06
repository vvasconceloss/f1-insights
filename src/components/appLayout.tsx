import { SiF1 } from "react-icons/si";
import { Separator } from "./ui/separator";
import { AppSidebar } from "@/components/appSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = ({ children, current_menu }: { children: React.ReactNode, current_menu: string }) => {
  return (
    <SidebarProvider>
      <AppSidebar current_menu={current_menu} />
      <SidebarInset>
        <header className="px-5 flex items-center justify-between border-b">
          <div className="flex shrink-0 items-center gap-2">
            <SidebarTrigger className="-ml-1 cursor-pointer" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          </div>
          <div className="bg-transparent text-[#FF1E00]">
            <SiF1 className="w-14 h-14" />
          </div>
        </header>
        <main className="p-5 w-full h-full">
          { children }
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout;