import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const cekEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (cekEmail) {
      return NextResponse.json({ status: 400, error: "Email already exists" });
    }
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({ status: 200, data: user });
  } catch (error) {
    error = error.message;
    return NextResponse.json({ status: 500, error: error });
  }
}