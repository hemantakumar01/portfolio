import { sendMail } from "@/utils/sendMail";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { name, email, number, message, password } = await req.json();
  console.log(name, email, number, message, password);
  sendMail({ email, message, name, number });
  return NextResponse.json({ success: true }, { status: 200 });
};
