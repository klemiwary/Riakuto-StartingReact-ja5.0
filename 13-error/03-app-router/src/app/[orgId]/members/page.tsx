import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import MemberList from '@/components/member-list.tsx';
import { getOrganization } from '@/entities/data-reader.ts';

interface MembersProps {
  params: Promise<{ orgId: string }>;
}

function generateTitle(orgId: string) {
  if (orgId === 'error') {
    throw new Error(`Intentional Error!`);
  }
  const org = getOrganization(orgId) || notFound();

  return `${org.name}の開発メンバー`;
}

export async function generateMetadata({ params }: MembersProps) {
  const { orgId } = await params;
  const title = generateTitle(orgId);

  return { title };
}

export default async function Members({ params }: MembersProps) {
  const { orgId } = await params;
  const title = generateTitle(orgId);

  return (
    <>
      <h2 className="mb-12 text-center">{title}</h2>
      <Suspense fallback={<Loading />}>
        <MemberList orgId={orgId} />
      </Suspense>
    </>
  );
}

function Loading() {
  return (
    <div className="my-14 flex h-80 items-center justify-center">
      <Loader2 className="text-primary size-12 animate-spin" />
    </div>
  );
}
