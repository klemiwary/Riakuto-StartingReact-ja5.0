import type { Player, Team } from "@/slamdunk.d.ts";

import playersData from "../data/players.json";
import teamsData from "../data/teams.json";

export function getTeam(teamId?: string) {
  const teams = teamsData as Team[];
  const team = teams.find((t) => t.id === teamId);

  return team ?? null;
}

export function getAllTeams() {
  const teams = teamsData as Team[];

  return teams;
}

export function getTeamColor(teamId?: string) {
  const team = getTeam(teamId);

  return team?.color;
}

export function getPlayers(teamId?: string) {
  const allPlayers = playersData as Player[];

  return teamId ? allPlayers.filter((p) => p.teamId === teamId) : allPlayers;
}
