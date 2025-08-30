"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-xs text-muted-foreground">
                    Toggle to switch between light and dark themes.
                  </p>
                </div>
                 <Switch
                    id="dark-mode"
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                    aria-label="Toggle Dark Mode"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive notifications via email for important events.
                  </p>
                </div>
                 <Switch id="email-notifications" defaultChecked />
              </div>
               <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Get push notifications on your devices.
                  </p>
                </div>
                 <Switch id="push-notifications" />
              </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Firebase API Keys</CardTitle>
            <CardDescription>
              Manage your Firebase project configuration. Use with caution.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" defaultValue="AIzaSy*******************" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectId">Project ID</Label>
              <Input id="projectId" defaultValue="primepanel-app" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="messagingSenderId">Messaging Sender ID</Label>
              <Input id="messagingSenderId" defaultValue="1234567890" readOnly />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Update Keys</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
