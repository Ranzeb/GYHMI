import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {Dialog} from "@headlessui/react";
import {useState} from "react";
import Home from "../Home/Home";
import Part4 from "../Part4/Part4";
import Part5 from "../Part5/Part5";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import ContactUs from "../ContactUs/ContactUs";

const navigation = [
    { name: 'Who we are', href: '#who-we-are' },
    { name: 'What we do', href: '#what-we-do' },
    { name: 'Contact', href: '#contact' },
    { name: 'Projects', href: '#projects'}
]


export default function Navbar () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-black">
            <nav
                className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className='flex items-center z-10 justify-between p-2 lg:px-8'>
                    <div className="flex lg:flex-1 ">


                        <a href="#" className="-m-1.5 mt-8">
                            <img
                                className="h-16 w-auto"
                                src="/G-bianco.png"
                                alt=""
                            />
                        </a>
                        <a href="#" className="-m-1.5 md:ml-0 ml-7 md:mt-0">
                            <img
                                className="h-32 w-auto"
                                src="/Gyhmi-bianco.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-xl font-semibold leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/G-bianco.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root">
                        <div className="-my-6 mt-10 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>


            <Home />
            <Part4 />
            <Part5 />
            <ContactUs />
            <Projects />
            <Footer />
        </div>
    )
}