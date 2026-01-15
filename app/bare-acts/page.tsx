'use client';

import { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import { BareAct } from '@/types';

export default function BareActs() {
    const [searchTerm, setSearchTerm] = useState('');

    const bareActs: BareAct[] = [
        { id: '1', title: 'Indian Penal Code', year: '1860', category: 'Criminal Law' },
        { id: '2', title: 'Code of Criminal Procedure', year: '1973', category: 'Criminal Law' },
        { id: '3', title: 'Code of Civil Procedure', year: '1908', category: 'Civil Law' },
        { id: '4', title: 'Indian Evidence Act', year: '1872', category: 'Evidence Law' },
        { id: '5', title: 'Constitution of India', year: '1950', category: 'Constitutional Law' },
        { id: '6', title: 'Companies Act', year: '2013', category: 'Corporate Law' },
        { id: '7', title: 'Income Tax Act', year: '1961', category: 'Tax Law' },
        { id: '8', title: 'Goods and Services Tax Act', year: '2017', category: 'Tax Law' },
        { id: '9', title: 'Indian Contract Act', year: '1872', category: 'Contract Law' },
        { id: '10', title: 'Sale of Goods Act', year: '1930', category: 'Commercial Law' },
        { id: '11', title: 'Transfer of Property Act', year: '1882', category: 'Property Law' },
        { id: '12', title: 'Registration Act', year: '1908', category: 'Property Law' },
        { id: '13', title: 'Hindu Marriage Act', year: '1955', category: 'Family Law' },
        { id: '14', title: 'Hindu Succession Act', year: '1956', category: 'Family Law' },
        { id: '15', title: 'Muslim Personal Law (Shariat) Application Act', year: '1937', category: 'Family Law' },
        { id: '16', title: 'Special Marriage Act', year: '1954', category: 'Family Law' },
        { id: '17', title: 'Protection of Women from Domestic Violence Act', year: '2005', category: 'Family Law' },
        { id: '18', title: 'Right to Information Act', year: '2005', category: 'Administrative Law' },
        { id: '19', title: 'Consumer Protection Act', year: '2019', category: 'Consumer Law' },
        { id: '20', title: 'Arbitration and Conciliation Act', year: '1996', category: 'Dispute Resolution' },
        { id: '21', title: 'Limitation Act', year: '1963', category: 'General Law' },
        { id: '22', title: 'Indian Partnership Act', year: '1932', category: 'Commercial Law' },
        { id: '23', title: 'Negotiable Instruments Act', year: '1881', category: 'Commercial Law' },
        { id: '24', title: 'Information Technology Act', year: '2000', category: 'Cyber Law' },
        { id: '25', title: 'Environmental Protection Act', year: '1986', category: 'Environmental Law' },
    ];

    const filteredActs = bareActs.filter(
        (act) =>
            act.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            act.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            act.year.includes(searchTerm)
    );

    const categories = [...new Set(bareActs.map((act) => act.category))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-slate-100">
            <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Bare Acts of India</h1>
                    <p className="text-xl text-red-100">
                        Searchable database of Indian legislation and bare acts
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search by act name, category, or year..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Categories</h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSearchTerm(category)}
                                className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-full hover:bg-red-50 transition-colors"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-red-600 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Act Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Year</th>
                                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredActs.map((act, index) => (
                                    <tr
                                        key={act.id}
                                        className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <FileText className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                                                <span className="font-medium text-slate-900">{act.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-700">{act.year}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                                {act.category}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredActs.length === 0 && (
                        <div className="text-center py-12 text-slate-500">
                            No acts found matching your search criteria
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
