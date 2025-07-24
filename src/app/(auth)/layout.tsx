'use client'

import { AppSidebar } from "@/components/Sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import RootClient from "@/store/rootClient"
import { useUserStore } from "@/store/useUserStore"

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUserStore()

  if (!user) return null

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <RootClient />
        {children}
      </main>
    </SidebarProvider>
  )
}
