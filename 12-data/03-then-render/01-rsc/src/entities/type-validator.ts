import type { Member } from '@/entities/types.ts';

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function isMember(obj: unknown): obj is Member {
  const user = obj as Member;

  return (
    typeof user?.login === 'string' &&
    typeof user?.id === 'number' &&
    typeof user?.nodeId === 'string' &&
    typeof user?.avatarUrl === 'string' &&
    typeof user?.gravatarId === 'string' &&
    typeof user?.url === 'string' &&
    typeof user?.htmlUrl === 'string' &&
    typeof user?.followersUrl === 'string' &&
    typeof user?.followingUrl === 'string' &&
    typeof user?.gistsUrl === 'string' &&
    typeof user?.starredUrl === 'string' &&
    typeof user?.subscriptionsUrl === 'string' &&
    typeof user?.organizationsUrl === 'string' &&
    typeof user?.reposUrl === 'string' &&
    typeof user?.eventsUrl === 'string' &&
    typeof user?.receivedEventsUrl === 'string' &&
    typeof user?.type === 'string' &&
    typeof user?.siteAdmin === 'boolean'
  );
}
