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
                <div className="mx-auto max-w-8xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-20 lg:px-0 lg:pt-44 lg:pl-56 ml-5">
                        <div className="mx-auto max-w-4xl">
                            <div className="max-w-2xl ml-28 mt-28">
                                {services.map((service) => {
                                    return (
                                    <div className="border-2 border-white text-center mb-20 h-24 items-center justify-center flex">
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
