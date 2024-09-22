import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!email || !password)
      return NextResponse.json({
        status: 400,
        error: "Email and password are required",
      });
    const cekEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (cekEmail) {
      return NextResponse.json({ status: 400, error: "Email already exists" });
    } else {
      const insertData = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      return NextResponse.json({ status: 200, data: insertData });
    }
  } catch (error) {
    error = error.message;
    return NextResponse.json({ status: 500, error: error });
  }
}
