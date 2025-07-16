// app/page.tsx
type Post = {
  id: number;
  title: {
    rendered: string;
  };
  _embedded?: {
    [key: string]: any;
  };
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch('http://172.40.0.3/wp-json/wp/v2/posts?_embed', {
    next: { revalidate: 60 }, // ISR対応（60秒ごとに再検証）
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>WordPress記事一覧</h1>
      <ul>
        {posts.map((post) => {
          const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          return (
            <li key={post.id} style={{ marginBottom: '2rem' }}>
              {thumbnail && (
                <img src={thumbnail} alt={post.title.rendered} style={{ maxWidth: 200, display: 'block' }} />
              )}
              {post.title.rendered}
            </li>
          );
        })}
      </ul>
    </main>
  );
}