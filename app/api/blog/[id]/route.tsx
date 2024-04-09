import { getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET=async (req: Request) => {

    try {
        const id =req.url.split("blog/")[1];
   
        const post=getById(id);
        if(!post){
            return NextResponse.json(
                { message: "Error" },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(
            { message: "ok", post},
            {
                status: 200,
            }
        );
    
       
    } catch (error) {
        return NextResponse.json(
            { message: "Error" ,error},
            {
                status: 404,
            }
        );
    }
  
}
  

// Define the updatePost function to update the post
const updatePost = (id: string, title: string, desc: string) => {
    // Implement the logic to update the post with the given id, title, and description
};


export const PUT = async (req:Request) => {
    try {
        const {title,desc}=await req.json();
        
        const id = req.url.split("blog/")[1];
        updatePost(id, title, desc);
        return NextResponse.json({ message: "ok" }, { status: 200 });
    }
     catch (error) {
        return NextResponse.json(
            { message: "Error", error },
            { status: 500 }
        );
    }
};

   
      export const DELETE=async (req: Request, res : Response) => {
   
       console.log("DELETE REQUEST");   
      }

