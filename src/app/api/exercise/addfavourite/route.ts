import { connect } from "@/dbConfig/dbConfig";
import Exercise from "@/models/exerciseModel";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, path } = reqBody

    console.log(reqBody);

    //check if user already exists
    const exercise = await Exercise.findOne({ path });

      if (exercise) {
          
      return NextResponse.json(
        { error: "exercise  already exists" },
        { status: 400 }
      );
    }

    // //hash password
    // const salt = await bcryptjs.genSalt(10)
    // const hashedPassword = await bcryptjs.hash(password, salt)

    const newExercise = new Exercise({
        
        email,
        path,
    })

    const savedExercise = await newExercise.save()
    console.log(savedExercise);

    //send verification email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "added to favourite successfully",
      success: true,
      
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
