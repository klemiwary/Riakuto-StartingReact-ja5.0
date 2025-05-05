import camelcaseKeys from "camelcase-keys";
import type { Member, Organization } from "@/entities/types.ts";
import { isMember, isObject } from "./type-validator.ts";

import orgsData from "../data/organizations.json";

export function getOrganization(orgId?: string) {
  const orgs = orgsData as Organization[];
  const organization = orgs.find((t) => t.id === orgId);

  return organization ?? null;
}

export function getAllOrganizations() {
  const organizations = orgsData as Organization[];

  return organizations;
}

export async function getMembers(orgId: string): Promise<Member[]> {
  const resource = `https://api.github.com/orgs/${orgId}/members`;

  const response = await fetch(resource, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Node.js",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`);
  }

  const data = (await response.json()) as unknown;

  if (!Array.isArray(data)) {
    throw new Error("Invalid API schema");
  }

  const members = data.map((obj) => {
    if (!isObject(obj)) throw new Error("Invalid API schema");

    const member = camelcaseKeys(obj, { deep: true });

    if (!isMember(member)) throw new Error("Invalid API schema");

    return member;
  });

  return members;
}
