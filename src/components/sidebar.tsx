import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DottedSeparator } from './dotted-separator'
import { Navigation } from './navigation'
import WorkspaceSwitcher from './workspace-switcher'

const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">
            <Link href="/" className="flex gap-2 font-bold">
                <Image src="/logo.png" alt="logo" width={40} height={40} /> Project<span className="text-blue-500">Management</span>
            </Link>
            <WorkspaceSwitcher />
            <div className="pt-3">
                <DottedSeparator />
            </div>
            <Navigation />
        </aside>
    )
}

export default Sidebar