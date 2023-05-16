import { Menu } from '@headlessui/react'
import DropdownMenuItem from './DropdownMenuItem'
import {IoMenu} from 'react-icons/io5/index.js'

export default function DropdownMenuHeader()
{
    return(
        <Menu as="div" className="relative text-left flex-col mr-3">
            <div className="inline-flex w-full lg:px-4 px-2 py-1">
                <Menu.Button className="inline-flex justify-center x-2 py-2 text-sm font-medium"
                    aria-label="menu">
                    <IoMenu className="h-6 w-6" />
                </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 z-10 origin-top-right rounded-md border mt-2 bg-accent-dark text-accent-lighter">
                <div className="py-1">
                    <DropdownMenuItem href="/menu">
                        Menu
                    </DropdownMenuItem>
                    <DropdownMenuItem href="/catering">
                        Catering
                    </DropdownMenuItem>
                    <DropdownMenuItem href="/delivery">
                        Delivery
                    </DropdownMenuItem>
                </div>
            </Menu.Items>
        </Menu>
    )
}