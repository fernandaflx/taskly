'use client'

import clsx from 'clsx'
import { AppSidebar } from "@/components/Sidebar"
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import RootClient from "@/store/rootClient"
import { useUserStore } from "@/store/useUserStore"

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { open } = useSidebar()
  console.log(open)

  return (
    <main
      className={clsx(
        "min-h-screen w-full transition-all duration-200 ease-in-out",
        open
          ? "max-w-[calc(100vw-12rem)]"
          : "max-w-[calc(100vw-3rem)]"
      )}
    >
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
