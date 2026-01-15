import { Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

export default function Calendar() {
    const calendars = [
        {
            title: 'Supreme Court Cause List',
            description: 'Daily cause list and case hearings at Supreme Court',
            link: 'https://main.sci.gov.in/causelist',
        },
        {
            title: 'Supreme Court Case Status',
            description: 'Check the status of cases listed in Supreme Court',
            link: 'https://main.sci.gov.in/case-status',
        },
        {
            title: 'Delhi High Court Cause List',
            description: 'Daily cause list for Delhi High Court',
            link: 'https://delhihighcourt.nic.in/causelist.asp',
        },
        {
            title: 'Bombay High Court Cause List',
            description: 'Daily cause list for Bombay High Court',
            link: 'https://bombayhighcourt.nic.in/causelist.php',
        },
        {
            title: 'Madras High Court Cause List',
            description: 'Daily cause list for Madras High Court',
            link: 'https://www.hcmadras.tn.nic.in/daily_cause_list.html',
        },
        {
            title: 'Karnataka High Court Cause List',
            description: 'Daily cause list for Karnataka High Court',
            link: 'https://karnatakajudiciary.kar.nic.in/',
        },
    ];

    const upcomingDates = [
        { date: '2024-01-15', event: 'Constitution Day Celebrations', court: 'Supreme Court' },
        { date: '2024-01-20', event: 'PIL Hearing - Environmental Cases', court: 'Supreme Court' },
        { date: '2024-01-25', event: 'Constitution Bench Hearing', court: 'Supreme Court' },
        { date: '2024-02-01', event: 'Budget Session Cases', court: 'All Courts' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100">
            <div className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Court Calendar</h1>
                    <p className="text-xl text-orange-100">
                        Access cause lists and important dates for Supreme Court and High Courts
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Cause Lists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {calendars.map((calendar, index) => (
                            <a
                                key={index}
                                href={calendar.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-orange-100 p-3 rounded-lg">
                                        <CalendarIcon className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-orange-600 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{calendar.title}</h3>
                                <p className="text-slate-600">{calendar.description}</p>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Upcoming Important Dates</h2>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="divide-y divide-slate-200">
                            {upcomingDates.map((item, index) => (
                                <div key={index} className="p-6 hover:bg-orange-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-orange-100 px-4 py-3 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-orange-600">
                                                    {new Date(item.date).getDate()}
                                                </div>
                                                <div className="text-xs text-orange-700 uppercase">
                                                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900">{item.event}</h3>
                                                <p className="text-slate-600">{item.court}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
