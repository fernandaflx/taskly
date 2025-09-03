'use client'

import { Home, Star, LogOut as LogOutIcon, SettingsIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useUserStore } from "@/store/useUserStore"
import { UserLabel } from "./UserLabel"
import { Button } from "../ui/button"
import clsx from "clsx"

import { useLogout } from "@/features/auth/hooks/useLogOut"

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Favorites",
    url: "/dashboard/favorites",
    icon: Star,
  },

]

export const AppSidebar = () => {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()

  const { user } = useUserStore()

  const LogOut = useLogout()

  const footerItems = [
    {
      action: () => { console.log('click') },
      icon: SettingsIcon,
    },
    {
      action: LogOut,
      icon: LogOutIcon,
    },

  ]

  return (
    <Sidebar collapsible='icon'>
      <SidebarContent>
        <UserLabel name={user?.name} photoUrl={user?.photoURL} />
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t ">
        <div
          className={clsx(
            "flex w-full items-center gap-4",
            !open ? "flex-col justify-center py-6" : "flex-row justify-center py-4"
          )}
        >
          {footerItems.map((item, index) => (
            <SidebarMenuButton key={index} asChild>
              <Button className="w-auto" variant='ghost' onClick={item.action}>
                <item.icon />
              </Button>
            </SidebarMenuButton>
          ))}
        </div>
      </SidebarFooter>


    </Sidebar >
  )
}