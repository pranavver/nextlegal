import { ExternalLink, MapPin } from 'lucide-react';
import { HighCourt } from '@/types';

export default function HighCourts() {
    const highCourts: HighCourt[] = [
        { name: 'Allahabad High Court', location: 'Allahabad, Uttar Pradesh', website: 'https://allahabadhighcourt.in/' },
        { name: 'Andhra Pradesh High Court', location: 'Amaravati, Andhra Pradesh', website: 'https://www.hc.ap.nic.in/' },
        { name: 'Bombay High Court', location: 'Mumbai, Maharashtra', website: 'https://www.bombayhighcourt.nic.in/' },
        { name: 'Calcutta High Court', location: 'Kolkata, West Bengal', website: 'https://calcuttahighcourt.gov.in/' },
        { name: 'Chhattisgarh High Court', location: 'Bilaspur, Chhattisgarh', website: 'https://www.highcourt.cg.gov.in/' },
        { name: 'Delhi High Court', location: 'New Delhi', website: 'https://www.delhihighcourt.nic.in/' },
        { name: 'Gauhati High Court', location: 'Guwahati, Assam', website: 'https://ghconline.gov.in/' },
        { name: 'Gujarat High Court', location: 'Ahmedabad, Gujarat', website: 'https://gujarathighcourt.nic.in/' },
        { name: 'Himachal Pradesh High Court', location: 'Shimla, Himachal Pradesh', website: 'https://hphighcourt.nic.in/' },
        { name: 'Jammu & Kashmir High Court', location: 'Srinagar/Jammu', website: 'https://www.jkhighcourt.nic.in/' },
        { name: 'Jharkhand High Court', location: 'Ranchi, Jharkhand', website: 'https://jharkhandhighcourt.nic.in/' },
        { name: 'Karnataka High Court', location: 'Bengaluru, Karnataka', website: 'https://karnatakajudiciary.kar.nic.in/' },
        { name: 'Kerala High Court', location: 'Ernakulam, Kerala', website: 'https://hckerala.gov.in/' },
        { name: 'Madhya Pradesh High Court', location: 'Jabalpur, Madhya Pradesh', website: 'https://www.mphc.gov.in/' },
        { name: 'Madras High Court', location: 'Chennai, Tamil Nadu', website: 'https://www.hcmadras.tn.nic.in/' },
        { name: 'Manipur High Court', location: 'Imphal, Manipur', website: 'https://manipurhighcourt.nic.in/' },
        { name: 'Meghalaya High Court', location: 'Shillong, Meghalaya', website: 'https://meghalayahighcourt.nic.in/' },
        { name: 'Orissa High Court', location: 'Cuttack, Odisha', website: 'https://www.orissahighcourt.nic.in/' },
        { name: 'Patna High Court', location: 'Patna, Bihar', website: 'https://patnahighcourt.gov.in/' },
        { name: 'Punjab and Haryana High Court', location: 'Chandigarh', website: 'https://highcourtchd.gov.in/' },
        { name: 'Rajasthan High Court', location: 'Jodhpur, Rajasthan', website: 'https://hcraj.nic.in/' },
        { name: 'Sikkim High Court', location: 'Gangtok, Sikkim', website: 'https://www.highcourtofsikkim.nic.in/' },
        { name: 'Telangana High Court', location: 'Hyderabad, Telangana', website: 'https://www.hc.ts.nic.in/' },
        { name: 'Tripura High Court', location: 'Agartala, Tripura', website: 'https://tripurahighcourt.nic.in/' },
        { name: 'Uttarakhand High Court', location: 'Nainital, Uttarakhand', website: 'https://highcourtofuttarakhand.gov.in/' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-100">
            <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">High Courts of India</h1>
                    <p className="text-xl text-green-100">
                        Complete directory of all High Courts across India
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highCourts.map((court, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-t-4 border-green-500"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{court.name}</h3>
                            <div className="flex items-start mb-3 text-slate-600">
                                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" />
                                <span>{court.location}</span>
                            </div>
                            <a
                                href={court.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
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
