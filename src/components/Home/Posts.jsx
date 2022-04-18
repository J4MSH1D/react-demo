import { useState, useEffect } from "react";
import Loading from "./Loading";
import instance from "../../composables/axios.js";
import PostsList from "./PostsList";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  async function getData() {
    try {
      const response = await instance.get("posts?_limit=5");
      setPosts(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <div className="text-4xl ml-10 mt-10 mb-2">Posts</div>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <PostsList key={post.id} title={post.title} body={post.body} />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
