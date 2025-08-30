"use client";

import { useState } from "react";
import { MoreHorizontal, PlusCircle, Search, ListFilter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const allUsers = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    role: "Admin",
    avatar: "https://picsum.photos/seed/olivia/40/40",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    role: "User",
    avatar: "https://picsum.photos/seed/jackson/40/40",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    role: "User",
    avatar: "https://picsum.photos/seed/isabella/40/40",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    role: "Editor",
    avatar: "https://picsum.photos/seed/william/40/40",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    role: "User",
    avatar: "https://picsum.photos/seed/sofia/40/40",
  },
   {
    name: "Liam Garcia",
    email: "liam@email.com",
    role: "User",
    avatar: "https://picsum.photos/seed/liam/40/40",
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <div className="flex items-center gap-2">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search users..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            A list of all users in your application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="profile picture" />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                          <p className="font-medium">{user.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'Admin' ? 'destructive' : 'secondary'}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Change Role</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{filteredUsers.length}</strong> of <strong>{allUsers.length}</strong> users
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
