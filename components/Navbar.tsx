'use client';

import { Scale, Menu, X, Lock } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Supreme Court', href: '/supreme-court' },
        { name: 'High Courts', href: '/high-courts' },
        { name: 'RTI', href: '/rti' },
        { name: 'Bare Acts', href: '/bare-acts' },
        { name: 'Calendar', href: '/calendar' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Law Dictionary', href: '/law-dictionary' },
        { name: 'Bar Associations', href: '/bar-associations' },
        { name: 'Judgments', href: '/judgments' },
        { name: 'Events', href: '/events' },
    ];

    return (
        <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="flex items-center space-x-2 cursor-pointer"
                    >
                        <Scale className="h-8 w-8 text-amber-400" />
                        <span className="text-xl font-bold">Legal Portal India</span>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === item.href
                                        ? 'bg-amber-500 text-white'
                                        : 'hover:bg-slate-800'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/admin"
                            className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === '/admin'
                                    ? 'bg-amber-500 text-white'
                                    : 'hover:bg-slate-800'
                                }`}
                        >
                            <Lock className="h-4 w-4" />
                            <span>Admin</span>
                        </Link>
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden bg-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                                        ? 'bg-amber-500 text-white'
                                        : 'hover:bg-slate-700'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/admin"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium ${pathname === '/admin'
                                    ? 'bg-amber-500 text-white'
                                    : 'hover:bg-slate-700'
                                }`}
                        >
                            <Lock className="h-4 w-4" />
                            <span>Admin</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
