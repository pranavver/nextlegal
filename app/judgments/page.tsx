'use client';

import { useState, useEffect } from 'react';
import { Gavel, ExternalLink, Bell } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Judgment } from '@/types';

export default function Judgments() {
    const [judgments, setJudgments] = useState<Judgment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchJudgments();
    }, []);

    const fetchJudgments = async () => {
        try {
            const { data, error } = await supabase
                .from('judgments')
                .select('*')
                .order('judgment_date', { ascending: false })
                .limit(20);

            if (error) throw error;
            setJudgments(data || []);
        } catch (error) {
            console.error('Error fetching judgments:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 text-lg">Loading judgments...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-100">
            <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recent Judgments</h1>
                            <p className="text-xl text-cyan-100">
                                Latest court judgments and important case decisions
                            </p>
                        </div>
                        <Bell className="h-16 w-16 text-cyan-200" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {judgments.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <Gavel className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">
                            No Judgments Available
                        </h3>
                        <p className="text-slate-500">
                            Judgments will appear here as they are added to the database
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {judgments.map((judgment) => (
                            <div
                                key={judgment.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-cyan-500"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-start flex-1">
                                        <Gavel className="h-8 w-8 text-cyan-600 mr-4 flex-shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                                {judgment.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 font-medium">
                                                    {judgment.court}
                                                </span>
                                                <span>Case No: {judgment.case_number}</span>
                                                <span>
                                                    Date: {new Date(judgment.judgment_date).toLocaleDateString('en-IN')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {judgment.link && (
                                    <a
                                        href={judgment.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
                                    >
                                        Read Full Judgment
                                        <ExternalLink className="h-4 w-4 ml-1" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
