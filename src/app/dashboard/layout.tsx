import type { Metadata } from "next";
import { Sidebar, SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "PrimePanel Dashboard",
  description: "Admin dashboard for PrimePanel.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <div className="flex min-h-screen">
            <Sidebar collapsible="icon">
                <Nav />
            </Sidebar>
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    </SidebarProvider>
  );
}
