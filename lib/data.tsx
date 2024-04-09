import { NextApiRequest, NextApiResponse } from 'next';


// Define the POST type
type POST = {
    id: string;
    title: string;
    desc: string;
    date: Date;
};

// Initialize posts array
let posts: POST[] = [];

// Function to get all posts
export const getPosts = () => posts;

// Function to add a new post
export const addPost = (post: POST) => {
    posts.push(post);
};

// Function to delete a post by ID
export const deletePost = (id: string) => {
    posts = posts.filter((post) => post.id !== id);
};

// Function to find a post by ID
export const getById = (id: string) => {
    return posts.find((post) => post.id === id);
};

// Function to update a post by ID
export const updatePost = (id: string, title: string, desc: string) => {
    const index = posts.findIndex(post => post.id === id);
    if (index !== -1) {
        // If the post with the given ID is found, update its title and description
        posts[index].title = title;
        posts[index].desc = desc;
        return true; // Indicate success
    }
    return false; // Indicate failure (post with the given ID not found)
};