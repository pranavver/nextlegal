import { ExternalLink, FileText, Info } from 'lucide-react';

export default function RTI() {
    const rtiLinks = [
        {
            title: 'Supreme Court RTI Portal',
            description: 'File RTI applications to the Supreme Court of India',
            link: 'https://main.sci.gov.in/rti',
        },
        {
            title: 'RTI Act 2005',
            description: 'Complete text of the Right to Information Act, 2005',
            link: 'https://rti.gov.in/rti-act.php',
        },
        {
            title: 'Central Information Commission',
            description: 'Official website of the Central Information Commission',
            link: 'https://cic.gov.in/',
        },
        {
            title: 'Online RTI Portal',
            description: 'File RTI applications online to Central Government',
            link: 'https://rtionline.gov.in/',
        },
        {
            title: 'RTI Rules',
            description: 'RTI Rules and Regulations for different departments',
            link: 'https://rti.gov.in/rti-rules.php',
        },
        {
            title: 'State Information Commissions',
            description: 'Links to all State Information Commissions',
            link: 'https://rti.gov.in/state-information-commission.php',
        },
    ];

    const guidelines = [
        'RTI application must be filed in writing or through electronic means',
        'Application should be accompanied by prescribed fee',
        'Information should be provided within 30 days of receipt',
        'Information concerning life or liberty should be provided within 48 hours',
        'If information is not provided, you can file an appeal',
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-slate-100">
            <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Right to Information (RTI)</h1>
                    <p className="text-xl text-purple-100">
                        Access RTI portals, guidelines, and resources for transparency
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
                    <div className="flex items-start">
                        <Info className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                What is RTI?
                            </h3>
                            <p className="text-blue-800">
                                The Right to Information Act, 2005 empowers Indian citizens to request
                                information from public authorities, promoting transparency and
                                accountability in governance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">RTI Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {rtiLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <FileText className="h-8 w-8 text-purple-600 flex-shrink-0" />
                                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">RTI Guidelines</h2>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <ul className="space-y-4">
                            {guidelines.map((guideline, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold mr-4">
                                        {index + 1}
                                    </span>
                                    <span className="text-slate-700 pt-1">{guideline}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
