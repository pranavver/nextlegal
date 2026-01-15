'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Event } from '@/types';

export default function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const { data, error } = await supabase
                .from('events')
                .select('*')
                .gte('event_date', new Date().toISOString())
                .order('event_date', { ascending: true });

            if (error) throw error;
            setEvents(data || []);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-600 mx-auto mb-4"></div>
                    <p className="text-slate-600 text-lg">Loading events...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-slate-100">
            <div className="bg-gradient-to-r from-yellow-900 to-yellow-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Events</h1>
                    <p className="text-xl text-yellow-100">
                        Upcoming conferences, seminars, and legal events
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {events.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-12 text-center">
                        <Calendar className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">
                            No Upcoming Events
                        </h3>
                        <p className="text-slate-500">
                            Check back soon for upcoming legal events and conferences
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 text-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-3xl font-bold">
                                                {new Date(event.event_date).getDate()}
                                            </div>
                                            <div className="text-sm">
                                                {new Date(event.event_date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </div>
                                        </div>
                                        <Calendar className="h-10 w-10" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                                        {event.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-slate-600 text-sm">
                                            <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center text-slate-600 text-sm">
                                            <Clock className="h-4 w-4 mr-2 text-yellow-600" />
                                            {new Date(event.event_date).toLocaleTimeString('en-IN', {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
