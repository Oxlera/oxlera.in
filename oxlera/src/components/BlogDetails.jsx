import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
    BLOCKS,
    MARKS,
} from "@contentful/rich-text-types";

const richTextOptions = {
    renderMark: {
        [MARKS.BOLD]: (text) => (
            <strong className="font-bold text-slate-900">
                {text}
            </strong>
        ),

        [MARKS.ITALIC]: (text) => (
            <em className="italic text-emerald-700">
                {text}
            </em>
        ),
    },

    renderNode: {
        [BLOCKS.HEADING_1]: (_, children) => (
            <h1 className="text-5xl font-bold mt-10 mb-6 text-slate-900">
                {children}
            </h1>
        ),

        [BLOCKS.HEADING_2]: (_, children) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-slate-800">
                {children}
            </h2>
        ),

        [BLOCKS.HEADING_3]: (_, children) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3">
                {children}
            </h3>
        ),

        [BLOCKS.PARAGRAPH]: (_, children) => (
            <p className="text-lg text-slate-600 leading-8 mb-6">
                {children}
            </p>
        ),

        [BLOCKS.UL_LIST]: (_, children) => (
            <ul className="list-disc ml-6 mb-6 space-y-2">
                {children}
            </ul>
        ),

        [BLOCKS.OL_LIST]: (_, children) => (
            <ol className="list-decimal ml-6 mb-6 space-y-2">
                {children}
            </ol>
        ),

        [BLOCKS.QUOTE]: (_, children) => (
            <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-slate-500 my-8">
                {children}
            </blockquote>
        ),
    },
};

function BlogDetails() {
    const { slug } = useParams();

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(
                    `https://cdn.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID
                    }/environments/master/entries?content_type=blogType&fields.slug=${slug}`,
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
                        },
                    }
                );
                const data = await response.json();

                const item = data.items[0];

                setBlog({
                    title: item.fields.title || "",
                    author: item.fields.author || "",
                    publishDate: item.fields.publishDate || "",
                    content: item.fields.content,
                    category: item.fields.category || "",
                    excerpt: item.fields.excerpt || "",
                    tags: item.fields.tags
                        ? item.fields.tags.split(",").map(tag => tag.trim())
                        : [],
                });

            } catch (err) {
                console.error(err);
            }
        }

        fetchBlog();
    }, [slug]);

    if (!blog) {
        return <div className="p-10">Loading...</div>;
    }

    return (
        <section className="min-h-screen bg-[#fbfdfc] pt-28 pb-20 px-6">

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
                <article className="max-w-none">
                    {documentToReactComponents(
                        blog.content,
                        richTextOptions
                    )}
                </article>


            </div>
        </section>
    );
}
export default BlogDetails;