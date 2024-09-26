import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Patchanop Rodklueng",
    studentId: "660612151",
  });
};
