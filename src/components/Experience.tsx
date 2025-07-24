import { getMonthDiff } from "../helpers/dateHelper";
import noonesLogo from "../assets/noonesLogo.png";
const projects = [
    {
        title: "Real Estate Search App",
        description: "Search and filter rental properties in Italy. React + MongoDB + Node.js.",
        link: "https://github.com/your-username/real-estate-app",
    },
    {
        title: "Crypto Wallet UI",
        description: "A sleek web interface for a decentralized crypto wallet.",
        link: "https://github.com/your-username/crypto-wallet",
    },
];

const Experience = () => {
    const middleMonths = getMonthDiff("2025-06-01");
    const juniorMonths = getMonthDiff("2024-11-30", "2025-06-01");
    const internMonth = getMonthDiff("2024-08-30", "2024-12-05");

    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold mb-8 dark:text-gray-300">🧑‍💻 Experience</h2>

            <div className="space-y-10 max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-700 flex gap-3">
                    <div>
                        <img src={noonesLogo} className="w-16" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                                Middle Software Engineer
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Jun 2025 – Present · {middleMonths} mos
                            </span>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            NoOnes · Full-time · Remote · Tallinn Metropolitan Area, Estonia
                            (Remote)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                            Focusing on developing and improving user interfaces for crypto
                            Marketplace and Wallet. My responsibilities include:
                        </p>
                        <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Building and maintaining components with React.js</li>
                            <li>Implementing responsive design and optimizing user experience</li>
                            <li>Integrating APIs and managing frontend data</li>
                            <li>Collaborating in a team environment</li>
                        </ul>
                        <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
                            I am constantly enhancing my skills, learning new technologies, and
                            contributing to the creation of modern and user-friendly solutions.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-700 flex gap-3">
                    <div>
                        <img src={noonesLogo} className="w-16" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                                Junior Software Engineer
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Dec 2024 – Jun 2025 · {juniorMonths} mos
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            NoOnes · Full-time · Pavia, Lombardy, Italy (Remote)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                            Focusing on developing and improving UX/UI for crypto Marketplace,
                            Wallet, Convert and other products. My responsibilities include:
                        </p>
                        <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Building and maintaining components</li>
                            <li>Implementing responsive design and optimizing user experience</li>
                            <li>Integrating APIs and managing frontend data</li>
                            <li>Collaborating in a team environment</li>
                        </ul>
                        <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
                            I am constantly enhancing my skills, learning new technologies, and
                            contributing to the creation of modern and user-friendly solutions.
                        </p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-700 flex gap-3">
                    <div>
                        <img src={noonesLogo} className="w-12" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1 text-gray-600 dark:text-gray-400">
                            <h3 className="text-xl font-semibold">
                                Software Engineer (Internship)
                            </h3>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Sep 2024 – Dec 2024 · {internMonth} mos
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            NoOnes · Internship · Pavia, Lombardy, Italy (Remote)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
