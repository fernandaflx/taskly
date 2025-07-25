'use client'

import { AppSidebar } from "@/components/Sidebar"
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import RootClient from "@/store/rootClient"
import { useUserStore } from "@/store/useUserStore"

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { open } = useSidebar()


  return (
    <main
      className={
        "h-screen flex-1 transition-all duration-200 ease-in-out overflow-hidden"
      }>
      <SidebarTrigger />
      <RootClient />
      {children}
    </main>
  )
}

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUserStore()

  if (!user) return null

  return (
    <SidebarProvider>
      <AppSidebar />
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  )
}
