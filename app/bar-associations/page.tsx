import { Users, MapPin, ExternalLink } from 'lucide-react';
import { BarAssociation } from '@/types';

export default function BarAssociations() {
    const associations: BarAssociation[] = [
        { name: 'Bar Council of India', state: 'National', contact: '+91-11-23381305', website: 'https://www.barcouncilofindia.org/' },
        { name: 'Supreme Court Bar Association', state: 'Delhi', contact: '+91-11-23388386', website: 'https://www.scba.in/' },
        { name: 'Delhi High Court Bar Association', state: 'Delhi', contact: '+91-11-23891111', website: 'https://dhcba.in/' },
        { name: 'Bombay Bar Association', state: 'Maharashtra', contact: '+91-22-22621711', website: 'https://www.bombaybarassociation.in/' },
        { name: 'Madras High Court Advocates Association', state: 'Tamil Nadu', contact: '+91-44-25342624', website: 'https://www.hcmadras.tn.nic.in/' },
        { name: 'Calcutta High Court Bar Association', state: 'West Bengal', contact: '+91-33-22435387', website: 'https://calcuttahighcourt.gov.in/' },
        { name: 'Karnataka High Court Advocates Association', state: 'Karnataka', contact: '+91-80-22861439', website: 'https://karnatakajudiciary.kar.nic.in/' },
        { name: 'Allahabad High Court Bar Association', state: 'Uttar Pradesh', contact: '+91-532-2407073', website: 'https://allahabadhighcourt.in/' },
        { name: 'Gujarat High Court Advocates Association', state: 'Gujarat', contact: '+91-79-27542251', website: 'https://gujarathighcourt.nic.in/' },
        { name: 'Rajasthan High Court Bar Association', state: 'Rajasthan', contact: '+91-291-2636046', website: 'https://hcraj.nic.in/' },
        { name: 'Kerala High Court Advocates Association', state: 'Kerala', contact: '+91-484-2395456', website: 'https://hckerala.gov.in/' },
        { name: 'Punjab and Haryana High Court Bar Association', state: 'Punjab/Haryana', contact: '+91-172-2740245', website: 'https://highcourtchd.gov.in/' },
        { name: 'Andhra Pradesh Bar Council', state: 'Andhra Pradesh', contact: '+91-863-2344533', website: 'https://www.apstatebarcouncil.org/' },
        { name: 'Telangana High Court Bar Association', state: 'Telangana', contact: '+91-40-24589723', website: 'https://www.hc.ts.nic.in/' },
        { name: 'Madhya Pradesh High Court Bar Association', state: 'Madhya Pradesh', contact: '+91-761-2628888', website: 'https://www.mphc.gov.in/' },
    ];

    const states = [...new Set(associations.map((assoc) => assoc.state))].sort();

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-slate-100">
            <div className="bg-gradient-to-r from-pink-900 to-pink-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Bar Associations</h1>
                    <p className="text-xl text-pink-100">
                        Directory of bar associations and councils across India
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Filter by State</h2>
                    <div className="flex flex-wrap gap-2">
                        {states.map((state, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                            >
                                {state}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {associations.map((association, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-l-4 border-pink-500"
                        >
                            <div className="flex items-start mb-4">
                                <div className="bg-pink-100 p-3 rounded-lg mr-4">
                                    <Users className="h-8 w-8 text-pink-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {association.name}
                                    </h3>
                                    <div className="flex items-center text-slate-600 mb-2">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>{association.state}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4">
                                <div className="text-slate-700">
                                    <span className="font-semibold">Contact:</span> {association.contact}
                                </div>
                            </div>

                            <a
                                href={association.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
                            >
                                Visit Website
                                <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
