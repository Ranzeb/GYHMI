export default function Services() {

    return (
        <div className="relative bg-black h-screen">
            <div className=" isolate pt-14">
                <img
                    src="/G-black.png"
                    alt=""
                    className="absolute mt-28 inset-0 -z-10 h-full w-full object-cover"
                />

                <div className="mx-auto max-w-8xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-20 lg:px-0 lg:pt-44 lg:pl-56 ml-5">
                        <div className="mx-auto max-w-4xl">
                            <div className="max-w-2xl ml-28 mt-28">
                                <h1 className="text-9xl font-bold tracking-tight text-white sm:text-6xl">
                                    Developing and People
                                </h1>
                                <p className="mt-8 text-4xl leading-normal text-gray-300">
                                    We organize your work to make you feel the best experience
                                </p>
                                <div className="mt-28 gap-x-6">
                                    <div>
                                        <a
                                            href="#"
                                            className="py-2.5 text-4xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                        >
                                            Discover us
                                        </a>
                                    </div>
                                    <div className="mt-10 ml-16">
                                        <a href="#" className="text-4xl font-semibold leading-6 text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5" stroke="currentColor" className="w-10 h-10 justify-self-center">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
