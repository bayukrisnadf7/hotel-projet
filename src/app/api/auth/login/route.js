import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";
export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ status: 401, error: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({
        status: 401,
        error: "Invalid email or password",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Login success",
      data: user,
    });
  } catch (error) {
    error = error.message;
    return NextResponse.json({status:500, error: error});
  }
}
