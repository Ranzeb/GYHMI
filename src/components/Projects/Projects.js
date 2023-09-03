const projects = [
    {
        name: 'RealtyBooker',
        description:
            'Showings Scheduling software for Real Estate Agents\n',
        src: '/Realtybooker.png',
        href: 'https://realtybooker.com/'
    },
    {
        name: 'InsideDocx',
        description:
            'Smart Chatbot for your company knowledge base\n',
        src: '/InsideDocx.png',
        href: 'https://insidedocx.com/'
    },
    {
        name: 'GYHMI',
        description:
            'Web Agency specialized in management and websites',
        src: '/InsideDocx.png',
        href: 'https://gyhmi.com/'
    }
]

export default function Projects() {
    return (
        <>
            <div className="bg-black">
                <div className="py-24 sm:py-32" id='projects'>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Our Projects</h2>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {projects.map((project) => (
                                <div
                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-5">
                                    <a href="#" className="mt-2 -m-1.5 p-1.5">
                                        <img
                                            className="rounded-t-lg"
                                            src={project.src}
                                            alt=""
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                        <a href={project.href}
                                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            See the website
                                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    );
}