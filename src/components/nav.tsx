"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Trophy,
  Rocket,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "./ui/sidebar";
import { Separator } from "./ui/separator";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/posts", label: "Posts", icon: FileText },
  { href: "/dashboard/scores", label: "Scores", icon: Trophy },
  { href: "/dashboard/users", label: "Users", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-semibold tracking-tight">PrimePanel</h2>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarMenu className="flex-1">
        {links.map((link) => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <SidebarMenuButton
                isActive={pathname === link.href}
                tooltip={link.label}
              >
                <link.icon />
                <span>{link.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
