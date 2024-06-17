import React, { useEffect, useState } from "react";
import service from "../appwrite/conf";
import { Container, PostCard } from "../components";
import authService from "../appwrite/auth";

function Home() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        service.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
        const user = authService.getCurrUser();
        setUser(user);
    }, [])

    if(!posts){
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <h1 className="text-4xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </Container>
            </div>
        )
    }
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;