'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { LogIn, LogOut, Plus, Trash2, UserPlus } from 'lucide-react';
import { Blog, Event, Judgment } from '@/types';

export default function Admin() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'blogs' | 'events' | 'judgments'>('blogs');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [judgments, setJudgments] = useState<Judgment[]>([]);

    const [showBlogForm, setShowBlogForm] = useState(false);
    const [showEventForm, setShowEventForm] = useState(false);
    const [showJudgmentForm, setShowJudgmentForm] = useState(false);

    const [blogForm, setBlogForm] = useState({ title: '', content: '', author: '', image_url: '', published: false });
    const [eventForm, setEventForm] = useState({ title: '', description: '', event_date: '', location: '' });
    const [judgmentForm, setJudgmentForm] = useState({ title: '', court: '', judgment_date: '', case_number: '', link: '' });

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        if (user) {
            fetchData();
        }
    }, [user, activeTab]);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
        setLoading(false);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            checkUser();
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            alert('Check your email for the confirmation link!');
        } catch (error: any) {
            setError(error.message);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setUser(null);
    };

    const fetchData = async () => {
        if (activeTab === 'blogs') {
            const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
            setBlogs(data || []);
        } else if (activeTab === 'events') {
            const { data } = await supabase.from('events').select('*').order('event_date', { ascending: false });
            setEvents(data || []);
        } else if (activeTab === 'judgments') {
            const { data } = await supabase.from('judgments').select('*').order('judgment_date', { ascending: false });
            setJudgments(data || []);
        }
    };

    const handleCreateBlog = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase.from('blogs').insert([blogForm]);
            if (error) throw error;
            setBlogForm({ title: '', content: '', author: '', image_url: '', published: false });
            setShowBlogForm(false);
            fetchData();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleCreateEvent = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase.from('events').insert([eventForm]);
            if (error) throw error;
            setEventForm({ title: '', description: '', event_date: '', location: '' });
            setShowEventForm(false);
            fetchData();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleCreateJudgment = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase.from('judgments').insert([judgmentForm]);
            if (error) throw error;
            setJudgmentForm({ title: '', court: '', judgment_date: '', case_number: '', link: '' });
            setShowJudgmentForm(false);
            fetchData();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const handleDelete = async (table: string, id: string) => {
        if (!confirm('Are you sure you want to delete this item?')) return;
        try {
            const { error } = await supabase.from(table).delete().eq('id', id);
            if (error) throw error;
            fetchData();
        } catch (error: any) {
            alert(error.message);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-slate-600"></div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                    <div className="flex items-center justify-center mb-6">
                        {isSigningUp ? (
                            <UserPlus className="h-12 w-12 text-slate-700" />
                        ) : (
                            <LogIn className="h-12 w-12 text-slate-700" />
                        )}
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-6 text-slate-900">
                        {isSigningUp ? 'Create Account' : 'Admin Login'}
                    </h2>
                    <form onSubmit={isSigningUp ? handleSignUp : handleLogin} className="space-y-4">
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-semibold transition-colors"
                        >
                            {isSigningUp ? 'Sign Up' : 'Login'}
                        </button>
                    </form>
                    <p className="text-center text-slate-600 mt-4">
                        {isSigningUp ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            onClick={() => { setIsSigningUp(!isSigningUp); setError(null); }}
                            className="text-slate-900 hover:underline font-semibold ml-2"
                        >
                            {isSigningUp ? 'Login' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="bg-slate-900 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Admin Panel</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-md mb-6">
                    <div className="flex border-b">
                        <button
                            onClick={() => setActiveTab('blogs')}
                            className={`flex-1 px-6 py-4 font-semibold ${activeTab === 'blogs' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Blogs
                        </button>
                        <button
                            onClick={() => setActiveTab('events')}
                            className={`flex-1 px-6 py-4 font-semibold ${activeTab === 'events' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Events
                        </button>
                        <button
                            onClick={() => setActiveTab('judgments')}
                            className={`flex-1 px-6 py-4 font-semibold ${activeTab === 'judgments' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Judgments
                        </button>
                    </div>
                </div>

                {activeTab === 'blogs' && (
                    <div>
                        <div className="mb-6">
                            <button
                                onClick={() => setShowBlogForm(!showBlogForm)}
                                className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                <Plus className="h-5 w-5" />
                                <span>Add New Blog</span>
                            </button>
                        </div>

                        {showBlogForm && (
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-4">Create New Blog</h3>
                                <form onSubmit={handleCreateBlog} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={blogForm.title}
                                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <textarea
                                        placeholder="Content"
                                        value={blogForm.content}
                                        onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg h-32"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Author"
                                        value={blogForm.author}
                                        onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Image URL (optional)"
                                        value={blogForm.image_url}
                                        onChange={(e) => setBlogForm({ ...blogForm, image_url: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={blogForm.published}
                                            onChange={(e) => setBlogForm({ ...blogForm, published: e.target.checked })}
                                            className="w-5 h-5"
                                        />
                                        <span>Published</span>
                                    </label>
                                    <div className="flex space-x-4">
                                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                                            Create Blog
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowBlogForm(false)}
                                            className="bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-2 rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="space-y-4">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                                            <p className="text-slate-600 mb-2">By {blog.author}</p>
                                            <p className="text-sm text-slate-500">
                                                {blog.published ? '✓ Published' : '✗ Draft'}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete('blogs', blog.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'events' && (
                    <div>
                        <div className="mb-6">
                            <button
                                onClick={() => setShowEventForm(!showEventForm)}
                                className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                <Plus className="h-5 w-5" />
                                <span>Add New Event</span>
                            </button>
                        </div>

                        {showEventForm && (
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-4">Create New Event</h3>
                                <form onSubmit={handleCreateEvent} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={eventForm.title}
                                        onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <textarea
                                        placeholder="Description"
                                        value={eventForm.description}
                                        onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg h-24"
                                        required
                                    />
                                    <input
                                        type="datetime-local"
                                        value={eventForm.event_date}
                                        onChange={(e) => setEventForm({ ...eventForm, event_date: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        value={eventForm.location}
                                        onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <div className="flex space-x-4">
                                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                                            Create Event
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowEventForm(false)}
                                            className="bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-2 rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="space-y-4">
                            {events.map((event) => (
                                <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                            <p className="text-slate-600 mb-2">{event.location}</p>
                                            <p className="text-sm text-slate-500">
                                                {new Date(event.event_date).toLocaleString()}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete('events', event.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'judgments' && (
                    <div>
                        <div className="mb-6">
                            <button
                                onClick={() => setShowJudgmentForm(!showJudgmentForm)}
                                className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                <Plus className="h-5 w-5" />
                                <span>Add New Judgment</span>
                            </button>
                        </div>

                        {showJudgmentForm && (
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-4">Create New Judgment</h3>
                                <form onSubmit={handleCreateJudgment} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={judgmentForm.title}
                                        onChange={(e) => setJudgmentForm({ ...judgmentForm, title: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Court"
                                        value={judgmentForm.court}
                                        onChange={(e) => setJudgmentForm({ ...judgmentForm, court: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="date"
                                        value={judgmentForm.judgment_date}
                                        onChange={(e) => setJudgmentForm({ ...judgmentForm, judgment_date: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Case Number"
                                        value={judgmentForm.case_number}
                                        onChange={(e) => setJudgmentForm({ ...judgmentForm, case_number: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Link (optional)"
                                        value={judgmentForm.link}
                                        onChange={(e) => setJudgmentForm({ ...judgmentForm, link: e.target.value })}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <div className="flex space-x-4">
                                        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                                            Create Judgment
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowJudgmentForm(false)}
                                            className="bg-slate-300 hover:bg-slate-400 text-slate-800 px-6 py-2 rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="space-y-4">
                            {judgments.map((judgment) => (
                                <div key={judgment.id} className="bg-white rounded-lg shadow-md p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{judgment.title}</h3>
                                            <p className="text-slate-600 mb-1">{judgment.court}</p>
                                            <p className="text-sm text-slate-500">Case: {judgment.case_number}</p>
                                            <p className="text-sm text-slate-500">
                                                Date: {new Date(judgment.judgment_date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete('judgments', judgment.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
