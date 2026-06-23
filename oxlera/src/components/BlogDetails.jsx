import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function BlogDetails() {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_STRAPI_URL}/api/blogs?filters[Slug][$eq]=${slug}`,
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
                        },
                    }
                );

                const result = await response.json();

                console.log("Fetched blog data:", result);

                const item = result.data[0];

                setBlog({
                    id: item.id,
                    documentId: item.documentId,

                    title: item.Title ?? "",
                    excerpt: item.Excerpt ?? "",
                    category: item.category ?? "General",

                    slug: item.Slug ?? item.documentId,

                    author: item.author ?? "Admin",

                    publishDate: item.publishDate ?? item.publishedAt,

                    tags: item.tags
                        ? item.tags.split(",").map(tag => tag.trim())
                        : [],

                    content: item.content ?? []
                });

            } catch (err) {
                console.error(err);
            }
        }

        fetchBlog();
    }, [slug]);

    if (!blog) {
        return (
            <section className="relative min-h-screen bg-[#fbfdfc] pt-28 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-100/30 blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] bg-blue-100/30 blur-[120px]" />
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-10" />
                    <div className="h-7 w-28 bg-gray-200 rounded-full animate-pulse mb-6" />
                    <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-3" />
                    <div className="h-12 w-1/2 bg-gray-200 rounded animate-pulse mb-6" />
                    <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-5 w-4/5 bg-gray-200 rounded animate-pulse mb-8" />
                    <div className="flex gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
                        <div className="flex flex-col gap-2 justify-center">
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                        </div>
                    </div>
                    <div className="space-y-4 mt-10">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-5 bg-gray-200 rounded animate-pulse" style={{ width: `${[100, 90, 95, 75][i]}%` }} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative min-h-screen bg-[#fbfdfc] pt-28 pb-20 px-6 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-emerald-100/30 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[35rem] h-[35rem] bg-blue-100/30 blur-[120px]" />
            </div>

            <div className="relative max-w-4xl mx-auto">

                {/* Back */}
                <button
                    onClick={() => window.history.back()}
                    className="mb-10 text-sm font-medium text-slate-500 hover:text-emerald-700"
                >
                    ← Back to blogs
                </button>

                {/* Category */}
                <span className="inline-flex px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest">
                    {blog.category}
                </span>

                {/* Title */}
                <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-slate-900">
                    {blog.title}
                </h1>

                {/* Excerpt */}
                <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                    {blog.excerpt}
                </p>

                {/* Author + Date */}
                <div className="mt-8 flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
                        {blog.author?.charAt(0)}
                    </div>

                    <div>
                        <div className="font-semibold text-slate-900">
                            {blog.author}
                        </div>

                        <div className="text-sm text-slate-500">
                            {new Date(
                                blog.publishDate
                            ).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                }
                            )}
                        </div>
                    </div>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                    {blog.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-3 py-2 bg-slate-100 rounded-full text-slate-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Divider */}
                <article className="max-w-none mt-12">
                    {blog.content?.map((block, index) => {
                        switch (block.type) {
                            case "heading":
                                if (block.level === 1) {
                                    return (
                                        <h1
                                            key={index}
                                            className="text-5xl font-bold mt-10 mb-6 text-slate-900"
                                        >
                                            {block.children?.map(child => child.text).join("")}
                                        </h1>
                                    );
                                }

                                if (block.level === 2) {
                                    return (
                                        <h2
                                            key={index}
                                            className="text-3xl font-semibold mt-8 mb-4 text-slate-800"
                                        >
                                            {block.children?.map(child => child.text).join("")}
                                        </h2>
                                    );
                                }

                                if (block.level === 3) {
                                    return (
                                        <h3
                                            key={index}
                                            className="text-2xl font-semibold mt-6 mb-3"
                                        >
                                            {block.children?.map(child => child.text).join("")}
                                        </h3>
                                    );
                                }

                                return null;

                            case "paragraph":
                                return (
                                    <p
                                        key={index}
                                        className="text-lg text-slate-600 leading-8 mb-6"
                                    >
                                        {block.children?.map(child => child.text).join("")}
                                    </p>
                                );

                            case "list":
                                return (
                                    <ul
                                        key={index}
                                        className="list-disc ml-6 mb-6 space-y-2"
                                    >
                                        {block.children?.map((item, i) => (
                                            <li key={i}>
                                                {item.children?.map(c => c.text).join("")}
                                            </li>
                                        ))}
                                    </ul>
                                );

                            case "quote":
                                return (
                                    <blockquote
                                        key={index}
                                        className="border-l-4 border-emerald-500 pl-6 italic text-slate-500 my-8"
                                    >
                                        {block.children?.map(child => child.text).join("")}
                                    </blockquote>
                                );

                            default:
                                return null;
                        }
                    })}
                </article>


            </div>
        </section>
    );
}
export default BlogDetails;