export default function PostsList({ title, body }) {
  return (
    <div className="mx-10 mt-3 py-3 rounded px-3 bg-slate-500">
      <h1 className="capitalize text-lg">
        <span className="text-2xl">Title: </span>
        {title}
      </h1>
      <p className="capitalize">
        <span className="text-lg">Body: </span>
        {body}
      </p>
    </div>
  );
}
