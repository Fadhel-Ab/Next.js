import { posts } from "@/app/data/posts";
import StyleSheet from "@/app/posts/[id]/Posts.module.css";
import Layout from "@/app/navigation";

export default async function Post({ params }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {    
        return (<h1>Post not found</h1>);
    }

    return (
        <Layout>
        <div className={StyleSheet.container}>
            <h1 className={StyleSheet.title}>{post.title}</h1>
            <p className={StyleSheet.content}>{post.content}</p>
        </div>
        </Layout>
    );
}