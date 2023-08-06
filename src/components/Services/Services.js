const services = [
    "Event Plannng & People Management",
    "Website Creation and Optimization",
    "Web Positioning and SEO Strategy",
    "Social Media Management"
]

export default function Services() {

    return (
        <div className="relative bg-black h-screen">
            <div className=" isolate pt-14">
                <img
                    src="/G-black.png"
                    alt=""
                    className="absolute mt-28 inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="mx-auto pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 xl:pt-28 2xl::py-40">
                    <div className="px-20 lg:px-0 lg:pt-44 lg:pl-24 2xl:pl-56 2xl:ml-5">
                        <div className="mx-auto xl:w-screen xl:max-w-6xl 2xl:w-screen">
                            <div className="2xl:ml-28 2xl:mt-32">
                                {services.map((service) => {
                                    return (
                                    <div className="border-2 border-white text-center mb-10 2xl:mb-20 h-24 items-center justify-center flex">
                                        <span className="text-white text-4xl">{service}</span>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
