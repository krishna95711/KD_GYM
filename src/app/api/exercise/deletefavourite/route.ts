import { connect } from "@/dbConfig/dbConfig";
import Exercise from "@/models/exerciseModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { path } = reqBody;

    console.log(reqBody);

    //check if user already exists
    // const exercise = await Exercise.findOne({ path });

   
    // //hash password
    // const salt = await bcryptjs.genSalt(10)
    // const hashedPassword = await bcryptjs.hash(password, salt)
    await Exercise.deleteOne({path});


    //send verification email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "deleted from favourite successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
