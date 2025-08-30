"use client";

import { Dribbble, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const cricketMatches = [
  {
    team1: "India",
    team2: "Australia",
    score1: "178/4",
    score2: "152/8",
    overs: "18.2",
    status: "Live",
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
  },
  {
    team1: "England",
    team2: "South Africa",
    status: "Upcoming",
    time: "7:30 PM",
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
  },
  {
    team1: "Pakistan",
    team2: "New Zealand",
    score1: "201/5",
    score2: "204/3",
    status: "Finished",
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
  },
];

const footballMatches = [
  {
    team1: "Real Madrid",
    team2: "Barcelona",
    score1: "2",
    score2: "1",
    time: "75'",
    status: "Live",
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
  },
  {
    team1: "Manchester United",
    team2: "Liverpool",
    status: "Upcoming",
    time: "Tomorrow, 8:00 PM",
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
  },
  {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    score1: "3",
    score2: "3",
    status: "Finished",
    logo1: "/placeholder.svg",
    logo2: "/placeholder.svg",
  },
];

export default function ScoresPage() {
  const getStatusColor = (status: string) => {
    if (status === "Live") return "bg-red-500 text-white";
    if (status === "Finished") return "bg-gray-500 text-white";
    return "bg-green-500 text-white";
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Scores</h1>
      <Tabs defaultValue="cricket" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 lg:w-1/3">
          <TabsTrigger value="cricket">
            <Flame className="mr-2 h-4 w-4" />
            Cricket
          </TabsTrigger>
          <TabsTrigger value="football">
            <Dribbble className="mr-2 h-4 w-4" />
            Football
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cricket">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cricketMatches.map((match, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    T20 World Series
                  </CardTitle>
                  <Badge className={getStatusColor(match.status)}>
                    {match.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image src={`https://picsum.photos/seed/${match.team1}/40`} width={24} height={24} className="rounded-full" alt={match.team1} data-ai-hint="team logo" />
                        <span className="font-semibold">{match.team1}</span>
                      </div>
                      {match.score1 && <span className="font-bold">{match.score1}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image src={`https://picsum.photos/seed/${match.team2}/40`} width={24} height={24} className="rounded-full" alt={match.team2} data-ai-hint="team logo" />
                        <span className="font-semibold">{match.team2}</span>
                      </div>
                      {match.score2 && <span className="font-bold">{match.score2}</span>}
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t text-sm text-muted-foreground">
                    {match.status === "Live"
                      ? `${match.team2} needs ${178 - 152 + 1} runs to win.`
                      : match.status === "Upcoming"
                      ? `Match starts at ${match.time}`
                      : `${match.team2} won by 7 wickets.`}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="football">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {footballMatches.map((match, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    La Liga
                  </CardTitle>
                  <Badge className={getStatusColor(match.status)}>
                    {match.status === 'Live' ? `${match.time}` : match.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                      <Image src={`https://picsum.photos/seed/${match.team1}/40`} width={24} height={24} className="rounded-full" alt={match.team1} data-ai-hint="team logo" />
                        <span className="font-semibold">{match.team1}</span>
                      </div>
                      {match.score1 && <span className="text-2xl font-bold">{match.score1}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                      <Image src={`https://picsum.photos/seed/${match.team2}/40`} width={24} height={24} className="rounded-full" alt={match.team2} data-ai-hint="team logo" />
                        <span className="font-semibold">{match.team2}</span>
                      </div>
                      {match.score2 && <span className="text-2xl font-bold">{match.score2}</span>}
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t text-sm text-muted-foreground">
                     {match.status === "Live"
                      ? `Match is ongoing.`
                      : match.status === "Upcoming"
                      ? `${match.time}`
                      : `Match ended in a draw.`}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
