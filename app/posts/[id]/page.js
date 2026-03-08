export default function Post({ params }) {
  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>This is the post content.</p>
    </div>
  );
}