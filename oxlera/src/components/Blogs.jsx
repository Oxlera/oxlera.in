import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_STRAPI_URL}/api/blogs`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
            },
          }
        );

        const result = await response.json();

        const formattedPosts = result.data.map((item) => ({
          id: item.id,
          title: item.Title || "",
          excerpt: item.Excerpt || "",
          category: item.category || "General",
          slug: item.Slug || item.documentId,
          author: item.author || "Admin",
          publishDate: item.publishDate || item.publishedAt,
          tags: item.tags
            ? item.tags.split(",").map((tag) => tag.trim())
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
      <section className="relative min-h-screen bg-[#fbfdfc] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <div className="h-14 w-72 bg-gray-200 rounded animate-pulse"></div>

            <div className="h-5 w-96 bg-gray-200 rounded mt-5 animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>

                <div className="h-7 w-full bg-gray-200 rounded mt-5 animate-pulse"></div>

                <div className="h-4 w-full bg-gray-200 rounded mt-4 animate-pulse"></div>

                <div className="h-4 w-4/5 bg-gray-200 rounded mt-2 animate-pulse"></div>

                <div className="h-3 w-32 bg-gray-200 rounded mt-6 animate-pulse"></div>

                <div className="flex gap-2 mt-5">
                  <div className="h-6 w-14 bg-gray-200 rounded animate-pulse"></div>

                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>

                <div className="h-4 w-24 bg-gray-200 rounded mt-6 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                {post.category}
              </span>

              <h2 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                {post.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-4 text-xs text-slate-400 font-medium">
                {post.author} •{" "}
                {post.publishDate &&
                  new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-semibold px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blogs/${post.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                Read more
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;