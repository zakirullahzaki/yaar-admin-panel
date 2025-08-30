"use client";

import {
  MoreHorizontal,
  PlusCircle,
  File,
  ListFilter,
} from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const posts = [
  {
    title: "The Ultimate Guide to React Hooks",
    author: "Alice Johnson",
    status: "Published",
    createdAt: "2023-10-25",
  },
  {
    title: "Getting Started with Next.js 14",
    author: "John Doe",
    status: "Published",
    createdAt: "2023-10-22",
  },
  {
    title: "A Deep Dive into Tailwind CSS",
    author: "Jane Smith",
    status: "Draft",
    createdAt: "2023-10-20",
  },
  {
    title: "Firebase Authentication in Depth",
    author: "Bob Brown",
    status: "Review",
    createdAt: "2023-10-18",
  },
  {
    title: "Building a Design System with Shadcn UI",
    author: "Charlie Davis",
    status: "Published",
    createdAt: "2023-10-15",
  },
  {
    title: "State Management in Modern React",
    author: "Diana Evans",
    status: "Draft",
    createdAt: "2023-10-11",
  },
];

export default function PostsPage() {
  const getBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "published":
        return "default";
      case "draft":
        return "secondary";
      case "review":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <ListFilter className="h-3.5 w-3.5 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Post
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Posts</CardTitle>
              <CardDescription>
                Manage your blog posts and view their performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.title}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.author}</TableCell>
                      <TableCell>
                        <Badge variant={getBadgeVariant(post.status)}>
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.createdAt}</TableCell>
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
                            <DropdownMenuItem>
                              {post.status === "Published"
                                ? "Unpublish"
                                : "Publish"}
                            </DropdownMenuItem>
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
                Showing <strong>1-6</strong> of <strong>{posts.length}</strong> posts
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
