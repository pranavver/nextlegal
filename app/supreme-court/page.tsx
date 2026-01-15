import { ExternalLink, Calendar, FileText, Video } from 'lucide-react';

export default function SupremeCourt() {
    const displayBoard = [
        { title: 'Court is in Session', status: 'active', time: '10:30 AM - 4:30 PM' },
        { title: 'Total Cases Listed Today', count: '145' },
        { title: 'Cases Disposed', count: '67' },
    ];

    const meetingLinks = [
        { title: 'Live Court Proceedings', link: 'https://webcast.gov.in/scindia/', icon: Video },
        { title: 'Supreme Court Website', link: 'https://main.sci.gov.in/', icon: ExternalLink },
        { title: 'Case Status', link: 'https://main.sci.gov.in/case-status', icon: FileText },
        { title: 'Daily Orders', link: 'https://main.sci.gov.in/daily-orders', icon: Calendar },
    ];

    const samples = [
        {
            title: 'Constitution Bench Hearing',
            description: 'Five-judge bench hearing matters of constitutional importance',
            date: '2024-01-15',
        },
        {
            title: 'PIL on Environmental Protection',
            description: 'Public Interest Litigation regarding forest conservation',
            date: '2024-01-14',
        },
        {
            title: 'Criminal Appeals',
            description: 'Appeals against High Court criminal convictions',
            date: '2024-01-13',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Supreme Court of India</h1>
                    <p className="text-xl text-blue-100">
                        Access live proceedings, case status, and important court information
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Display Board</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayBoard.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
                            >
                                <h3 className="text-lg font-semibold text-slate-700 mb-2">
                                    {item.title}
                                </h3>
                                {item.status && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                        {item.status.toUpperCase()}
                                    </span>
                                )}
                                {item.time && (
                                    <p className="text-slate-600 mt-2">{item.time}</p>
                                )}
                                {item.count && (
                                    <p className="text-4xl font-bold text-blue-600 mt-2">{item.count}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {meetingLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center text-center group"
                                >
                                    <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-500 transition-colors">
                                        <Icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                                    </div>
                                    <h3 className="font-semibold text-slate-900">{link.title}</h3>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Recent Matters</h2>
                    <div className="space-y-4">
                        {samples.map((sample, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold text-slate-900">{sample.title}</h3>
                                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                        {sample.date}
                                    </span>
                                </div>
                                <p className="text-slate-600">{sample.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
