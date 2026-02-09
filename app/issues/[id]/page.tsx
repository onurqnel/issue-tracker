import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Heading, Text, Flex, Card } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const IssueDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="4" my="2">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <Text>{issue.description}</Text>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
