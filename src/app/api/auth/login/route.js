import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    // Cari user berdasarkan email
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Jika user tidak ditemukan
    if (!user) {
      return NextResponse.json({ status: 404, error: "User not found" });
    }

    // Bandingkan password yang diinput dengan password yang ada di database
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // Jika password salah
    if (!isPasswordCorrect) {
      return NextResponse.json({
        status: 401,
        error: "Invalid email or password",
      });
    }

    // Jika login berhasil
    return NextResponse.json({
      status: 200,
      message: "Login success",
      data: user,
    });
  } catch (error) {
    // Tangani error
    console.error("Error during login:", error.message);
    return NextResponse.json({ status: 500, error: error.message });
  }
}
