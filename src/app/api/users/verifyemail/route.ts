import { cookies } from 'next/headers'
import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";



connect()


export async function POST(request: NextRequest){

    try {
        const reqBody = await request.json()
        const {token} = reqBody
        

        const user = await User.findOne({verifyToken: token.verifyToken});
        
        if (!user) {
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }

        user.isVerfied = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();
        cookies().set('token', 'value', { maxAge: 0 })
          
        
        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        })


    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}