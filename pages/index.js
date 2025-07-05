import { getBlogPosts } from '../lib/notion';

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{post.title}</h2>
          <p style={{ fontSize: "0.9rem", color: "#888" }}>{post.date}</p>
        </div>
      ))}
    </main>
  );
}
