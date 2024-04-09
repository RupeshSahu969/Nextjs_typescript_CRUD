import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { addPost, getPosts } from "@/lib/data";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const posts = getPosts();

        return NextResponse.json(
            { message: "ok", posts },
            {
                status: 200,
            }
        );
    } catch (err) {
        return NextResponse.json(
            { message: "Error", err },
            {
                status: 500,
            }
        );
    }
};

export const POST = async (req: Request, res: Response) => {
    const {title,desc} =await req.json();

    try {
        const post={title,desc,date: new Date(), id:Date.now().toString()};
        addPost(post);
        return NextResponse.json(
            { message: "ok", post },
            {
                status: 201,
            }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            {
                status: 500,
            }
        );
    }

}

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("PUT REQUEST");
};

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("DELETE REQUEST");
};
