'use client';

import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';

interface LawTerm {
    term: string;
    definition: string;
    category: string;
}

export default function LawDictionary() {
    const [searchTerm, setSearchTerm] = useState('');

    const lawTerms: LawTerm[] = [
        { term: 'Affidavit', definition: 'A written statement confirmed by oath or affirmation for use as evidence in court', category: 'General' },
        { term: 'Bail', definition: 'The temporary release of an accused person awaiting trial on condition of security', category: 'Criminal Law' },
        { term: 'Cognizable Offense', definition: 'An offense for which police can arrest without warrant', category: 'Criminal Law' },
        { term: 'Decree', definition: 'The formal expression of an adjudication which conclusively determines the rights of parties', category: 'Civil Law' },
        { term: 'Ex-parte', definition: 'Proceedings conducted in the absence of one party', category: 'Procedure' },
        { term: 'Force Majeure', definition: 'Unforeseeable circumstances preventing fulfillment of a contract', category: 'Contract Law' },
        { term: 'Habeas Corpus', definition: 'Writ requiring a person to be brought before a judge or court', category: 'Constitutional Law' },
        { term: 'Indemnity', definition: 'Security or protection against a loss or liability', category: 'Contract Law' },
        { term: 'Jurisdiction', definition: "The official power to make legal decisions and judgments", category: 'General' },
        { term: 'Litigation', definition: 'The process of taking legal action through courts', category: 'Procedure' },
        { term: 'Mandamus', definition: 'A judicial remedy in the form of an order from a court commanding a public authority to perform a duty', category: 'Constitutional Law' },
        { term: 'Non-cognizable Offense', definition: 'An offense for which police cannot arrest without warrant', category: 'Criminal Law' },
        { term: 'Ordinance', definition: 'A law promulgated by the President or Governor when legislature is not in session', category: 'Constitutional Law' },
        { term: 'Plaintiff', definition: 'A person who brings a case against another in a court of law', category: 'Civil Law' },
        { term: 'Quasi-judicial', definition: 'Having a partly judicial character by possession of right to hold hearings', category: 'Administrative Law' },
        { term: 'Res Judicata', definition: 'A matter that has been adjudicated by a competent court and may not be pursued further', category: 'Procedure' },
        { term: 'Statute', definition: 'A written law passed by a legislative body', category: 'General' },
        { term: 'Tort', definition: 'A wrongful act or an infringement of a right leading to civil legal liability', category: 'Civil Law' },
        { term: 'Ultra Vires', definition: 'Beyond one\'s legal power or authority', category: 'General' },
        { term: 'Verdict', definition: 'A decision on a disputed issue in a civil or criminal case', category: 'General' },
        { term: 'Warrant', definition: 'A document issued by a legal or government official authorizing action', category: 'Criminal Law' },
    ];

    const filteredTerms = lawTerms.filter(
        (item) =>
            item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [...new Set(lawTerms.map((term) => term.category))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Law Dictionary</h1>
                    <p className="text-xl text-blue-100">
                        Comprehensive searchable database of legal terminology
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search legal terms..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-full hover:bg-blue-50 transition-colors"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    {filteredTerms.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start">
                                <BookOpen className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900">{item.term}</h3>
                                        <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed">{item.definition}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTerms.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-lg shadow-md">
                        <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500 text-lg">No terms found matching your search</p>
                    </div>
                )}
            </div>
        </div>
    );
}
