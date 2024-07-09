import { sendMail } from "@/utils/sendMail";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, number, message, password } = await req.json();
    // console.log(name, email, number, message, password);
    console.log("SendMail1");
    await sendMail({ email, message, name, number });
    console.log("SendMail2");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.log("My Error", error.message);
  }
};
