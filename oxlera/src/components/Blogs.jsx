import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master/entries`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
            },
          }
        );

        const data = await response.json();

        const formattedPosts = data.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title || "",
          excerpt: item.fields.excerpt || "",
          category: item.fields.category || "",
          slug: item.fields.slug || "",
          author: item.fields.author || "",
          publishDate: item.fields.publishDate || "",
          tags: item.fields.tags
            ? item.fields.tags.split(",").map((tag) => tag.trim())
            : [],
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading blogs...
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#fbfdfc] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-bold">
            Latest{" "}
            <span className="text-emerald-700 italic font-light">
              Blogs
            </span>
          </h1>

          <p className="mt-5 text-slate-600 max-w-xl">
            Insights on ESG, sustainability, and climate innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                {post.category}
              </span>

              <h2 className="mt-4 text-xl font-bold">
                {post.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-4 text-xs text-gray-500">
                {post.author} •{" "}
                {post.publishDate &&
                  new Date(post.publishDate).toLocaleDateString()}
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blogs/${post.slug}`}
                className="mt-6 inline-block text-sm font-bold text-emerald-700 hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;