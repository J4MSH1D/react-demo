import { useState, useEffect } from "react";
import instance from "../../composables/axios.js";

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
  useEffect(() => {getData()})
  const Loading = () => <div className="text-center text-lg mx-10 mt-3 py-3 rounded px-3 bg-slate-500">Loading...</div>

  const PostsList = (props) => {
    const { id, title, body } = props;
    return (
      <div key={id} className="mx-10 mt-3 py-3 rounded px-3 bg-slate-500">
        <h1 className="capitalize text-lg"><span className="text-2xl">Title: </span>{title}</h1>
        <p className="capitalize"><span className="text-lg">Body: </span>{body}</p>
      </div>
    );
  };
  return (
    <div>
    <div className="text-4xl ml-10 mt-10 mb-2">Posts</div>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <PostsList id={post.id} title={post.title} body={post.body} />
          )
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
