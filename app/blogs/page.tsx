'use client';

import { useState, useEffect } from 'react';
import { Newspaper, User, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Blog } from '@/types';

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .eq('published', true)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setBlogs(data || []);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 text-lg">Loading blogs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100">
            <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Blogs</h1>
                    <p className="text-xl text-teal-100">
                        Articles, insights, and analysis on Indian law and legal matters
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {blogs.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <Newspaper className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">
                            No Blogs Available
                        </h3>
                        <p className="text-slate-500">
                            Blog articles will appear here once published
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
                            >
                                {blog.image_url && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={blog.image_url}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {blog.title}
                                    </h2>

                                    <p className="text-slate-600 mb-4 line-clamp-3">
                                        {blog.content.substring(0, 150)}...
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            <span>{blog.author}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            <span>
                                                {new Date(blog.created_at).toLocaleDateString('en-IN', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
