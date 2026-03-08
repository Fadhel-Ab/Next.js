export default async function Post({ params }) {
    const { id } = await params;
  return (
    <div>
      <h1>Post: {id}</h1>
        <p>This is the content of post {id}.</p>
    </div>
  );
}