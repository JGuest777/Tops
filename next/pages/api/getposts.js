const url = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"1632496079","first":8}`;

const cache = {
  lastFetch: 0,
  posts: [],
};

async function getPosts() {
  // 30min cache since last fetch
  const timeSinceLastFetch = Date.now() - cache.lastFetch;
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }

  const data = await fetch(url).then((res) => res.json());
  const posts = slimPosts(data);
  cache.lastFetch = Date.now();
  cache.posts = posts;
  return posts;
}

function slimPosts(res) {
  return res.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    thumb: edge.node.thumbnail_src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }));
}

export default async function handler(req, res) {
  const posts = await getPosts();
  res.json(posts);
}
