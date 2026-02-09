import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { validationSchema } from "../../validationSchema";

export async function GET() {
  const issues = await prisma.issue.findMany();
  return NextResponse.json(issues);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = validationSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: z.flattenError(validation.error).fieldErrors },
      { status: 400 },
    );
  } else {
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(newIssue, { status: 201 });
  }
}
