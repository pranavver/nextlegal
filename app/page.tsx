'use client';

import { Scale, BookOpen, Building2, FileText, Calendar, Users, Gavel, MapPin, Library, FileSearch, Newspaper } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: Scale,
      title: 'Supreme Court',
      description: 'Access display board, meeting links, and court samples',
      href: '/supreme-court',
      color: 'bg-blue-500',
    },
    {
      icon: Building2,
      title: 'High Courts',
      description: 'Complete list of all High Courts across India',
      href: '/high-courts',
      color: 'bg-green-500',
    },
    {
      icon: FileSearch,
      title: 'RTI Portal',
      description: 'Right to Information links and resources',
      href: '/rti',
      color: 'bg-purple-500',
    },
    {
      icon: FileText,
      title: 'Bare Acts',
      description: 'Searchable database of Indian bare acts',
      href: '/bare-acts',
      color: 'bg-red-500',
    },
    {
      icon: Calendar,
      title: 'Court Calendar',
      description: 'Supreme Court and other court calendars',
      href: '/calendar',
      color: 'bg-orange-500',
    },
    {
      icon: Newspaper,
      title: 'Legal Blogs',
      description: 'Articles and insights on Indian law',
      href: '/blogs',
      color: 'bg-teal-500',
    },
    {
      icon: BookOpen,
      title: 'Law Dictionary',
      description: 'Comprehensive searchable legal terminology',
      href: '/law-dictionary',
      color: 'bg-indigo-500',
    },
    {
      icon: Users,
      title: 'Bar Associations',
      description: 'Directory of bar associations in India',
      href: '/bar-associations',
      color: 'bg-pink-500',
    },
    {
      icon: Gavel,
      title: 'Recent Judgments',
      description: 'Latest court judgments and notifications',
      href: '/judgments',
      color: 'bg-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Legal Events',
      description: 'Upcoming legal events and conferences',
      href: '/events',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Scale className="h-20 w-20 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
              Legal Portal India
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your comprehensive gateway to Indian legal resources, court information, and judicial services
            </p>
            <Link
              href="/supreme-court"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Legal Resources
          </h2>
          <p className="text-lg text-slate-600">
            Access everything you need for legal research and information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                href={feature.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer overflow-hidden group"
              >
                <div className="p-6">
                  <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-amber-400 transition-colors"></div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 Legal Portal India. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
