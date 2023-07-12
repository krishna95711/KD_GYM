import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import Exercise from "@/models/exerciseModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    console.log(userId);
    const user = await User.findOne({ _id: userId }).select("-password");
    console.log(user.email);
    const emaildata = user.email;
    const email = { email: emaildata };
    console.log(email);
    const arr = await Exercise.find(email );
    console.log(arr);

    // const query = Exercise.where({ color: "white" });
    // const kitten = await query.findOne();

    return NextResponse.json({
      mesaaage: "User found",
      data: arr,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
