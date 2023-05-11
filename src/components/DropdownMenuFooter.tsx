import { Menu } from '@headlessui/react'
import DropdownMenuItem from './DropdownMenuItem'
import { IoChevronDown, IoMailSharp, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5/index.js'
import { INSTAGRAM_URL, FACEBOOK_URL } from "../consts";

export default function DropdownMenuFooter()
{
    return (
        <div className="flex-col">
            <Menu as="div" className="relative text-left flex-col mb-12">
                <div className="inline-flex w-full">
                    <h1 className="text-text-md font-semibold">Location</h1>
                    <Menu.Button>
                        <IoChevronDown
                            className="ml-4 -mr-1 mt-1 h-5 w-5"
                            aria-hidden="true"
                            />
                    </Menu.Button>
                </div>
                <Menu.Items>
                    <div className="my-5">
                        <DropdownMenuItem>
                            5475 West Loop S, Ste 170, Houston, TX, United States, Texas
                        </DropdownMenuItem>
                    </div>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="relative text-left flex-col  mb-12">
                <div className="inline-flex w-full">
                    <h1 className="text-text-md font-semibold">Operating Hours</h1>
                    <Menu.Button>
                        <IoChevronDown
                            className="ml-4 -mr-1 mt-1 h-5 w-5"
                            aria-hidden="true"
                            />
                    </Menu.Button>
                </div>
                <Menu.Items>
                    <div className="my-5">
                        <DropdownMenuItem>
                        <ul className="space-y-4 text-text-2sm">
                            <li>Mon-Saturday: 11:00am - 8pm</li>
                            <li>Sunday: 12:00am - 8pm</li>
                        </ul>
                        </DropdownMenuItem>
                    </div>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="relative text-left flex-col">
                <div className="inline-flex w-full">
                    <h1 className="text-text-md font-semibold">Contact Us</h1>
                    <Menu.Button>
                        <IoChevronDown
                            className="ml-4 -mr-1 mt-1 h-5 w-5"
                            aria-hidden="true"
                            />
                    </Menu.Button>
                </div>
                <Menu.Items>
                    <div className="my-5">
                        <DropdownMenuItem>
                            <ul className="mb-7 flex flex-row gap-4">
                                <li className="transform transition-transform hover:scale-125">
                                    <a href={INSTAGRAM_URL}>
                                        <IoLogoInstagram className="h-9 w-9 text-accent-dark" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="transform transition-transform hover:scale-125">
                                    <a href={FACEBOOK_URL}>
                                        <IoLogoFacebook
                                            className="h-9 w-9 text-accent-dark"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                                <li className="transform transition-transform hover:scale-125">
                                    <a href="mailto:Jadesteahouse2019@gmail.com">
                                        <IoMailSharp
                                            className="h-9 w-9 text-accent-dark"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </li>
                            </ul>
                            <h3 className="flex text-text-2sm">
                                (281) 974-1437
                            </h3>
                        </DropdownMenuItem>
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    )
}