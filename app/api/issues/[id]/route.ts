import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { validationSchema } from "../../../validationSchema";

interface Props {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();
  const validation = validationSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: z.flattenError(validation.error).fieldErrors },
      { status: 400 },
    );
  }
  const existingIssue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!existingIssue) {
    return NextResponse.json(
      { error: "Invalid issue" },
      { status: 404 },
    );
  }
  const updatedIssue = await prisma.issue.update({
    where: { id: parseInt(id) },
    data: body,
  });
  return NextResponse.json(updatedIssue);
}