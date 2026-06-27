import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      otherService,
      message,
    } = body;

    // Generate reference number
    const reference_id = `NIR-${Date.now()}`;

    // Normalize service
    const finalService =
      service === "Other"
        ? otherService.trim()
        : service;

    const { data, error } = await supabaseServer
      .from("contacts")
      .insert([
        {
          reference_id,
          name,
          email,
          phone,
          company,
          service: finalService,
          message,
        },
      ])
      .select();

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully.",
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}