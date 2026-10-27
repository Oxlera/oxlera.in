import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const strapiMedia = (url) =>
  !url
    ? null
    : url.startsWith("http")
    ? url
    : `${import.meta.env.VITE_STRAPI_URL}${url}`;

function blocksToText(blocks) {
  if (!Array.isArray(blocks)) return "";
  const walk = (nodes) =>
    (nodes || [])
      .map((node) => (node.text ?? "") + (node.children ? walk(node.children) : ""))
      .join(" ");
  return walk(blocks);
}

function readingTime({ content, excerpt }) {
  const text = blocksToText(content) || excerpt || "";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_STRAPI_URL}/api/blogs?populate=coverImage&sort=publishDate:desc&pagination[pageSize]=100`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
            },
          }
        );

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const result = await response.json();

        const formattedPosts = (result.data || []).map((item) => {
          const cover = Array.isArray(item.coverImage)
            ? item.coverImage[0]
            : item.coverImage;

          return {
            id: item.id,
            title: item.Title || "",
            excerpt: item.Excerpt || "",
            category: item.category || "General",
            slug: item.Slug || item.documentId,
            author: item.author || "Admin",
            publishDate: item.publishDate || item.publishedAt,
            readTime: readingTime({ content: item.content, excerpt: item.Excerpt }),
            coverImage: strapiMedia(cover?.formats?.small?.url || cover?.url),
          };
        });

        setPosts(formattedPosts);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-4">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Latest{" "}
            <span className="text-emerald-700 italic font-light">Blogs</span>
          </h1>

          <p className="mt-5 text-slate-600">
            Insights on ESG, sustainability, and climate innovation.
          </p>
        </header>

        {loading && (
          <div className="mt-8 divide-y divide-slate-200/70">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex gap-6 py-8">
                <div className="flex-1">
                  <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-4/5 bg-gray-200 rounded mt-4 animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded mt-4 animate-pulse" />
                  <div className="h-4 w-3/5 bg-gray-200 rounded mt-2 animate-pulse" />
                </div>
                <div className="hidden sm:block w-40 h-28 md:w-48 md:h-32 shrink-0 bg-gray-200 rounded-xl animate-pulse" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="mt-16 text-center text-slate-500">
            Couldn&apos;t load posts right now. Please try again later.
          </p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="mt-16 text-center text-slate-500">
            No posts published yet. Check back soon.
          </p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="mt-8 divide-y divide-slate-200/70">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.slug}`}
                className="group flex gap-6 py-8 -mx-4 px-4 rounded-2xl hover:bg-white/50 transition-colors"
              >
                <article className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-slate-400">
                    {post.category} · {post.readTime} min read
                    {post.publishDate && ` · ${formatDate(post.publishDate)}`}
                  </div>

                  <h2 className="mt-3 font-serif text-2xl md:text-[1.75rem] leading-snug text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="mt-2 text-slate-600 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                    Read
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </article>

                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="hidden sm:block w-40 h-28 md:w-48 md:h-32 shrink-0 rounded-xl object-cover"
                  />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Blogs;
