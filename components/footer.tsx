"use client";
import Link from "next/link";
import { Rss , Mail , Youtube , Github } from 'lucide-react';

export function Footer() {

    const footerNavs = [
        {
            label: "Projects",
            items: [
                {
                    href: 'https://schemadoc.bradcn.site',
                    name: 'Schemadoc'
                },
            ],
        },
        {
            label: "Community",
            items: [
                {
                    href: '/community/support',
                    name: 'Support'
                },
                {
                    href: '/community/team',
                    name: 'Team'
                },
                {
                    href: '#',
                    name: 'Resources'
                },
                {
                    href: '#',
                    name: 'Contributing'
                },
                {
                    href: '#',
                    name: 'Release Process'
                },
                {
                    href: '#',
                    name: 'FAQ'
                },
            ]
        },
        {
            label: "Legal",
            items: [
                {
                    href: '#',
                    name: 'Terms'
                },
                {
                    href: '#',
                    name: 'Policy'
                },
                {
                    href: '#',
                    name: 'Contributor Convenant'
                },
                {
                    href: '/legal/code-of-conduct',
                    name: 'Code of Conduct'
                },
                {
                    href: '/legal/license',
                    name: 'License'
                },
            ]
        },
        {
            label: "Information",
            items: [
                {
                    href: '/about',
                    name: 'About'
                },
                {
                    href: '/blog',
                    name: 'Blog'
                },
            ],
        }
    ]

    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-200 font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={el.href}
                                                className="duration-150"

                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="">© 2024 Bradcn Inc. All rights reserved.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                        <a href="#">
                            <Rss className="w-6 h-6 hover:text-gray-500 duration-150" />
                        </a>
                        <a href="#">
                            <Mail className="w-6 h-6 hover:text-gray-500 duration-15" />
                        </a>
                        <a href="#">
                            <Github className="w-6 h-6 hover:text-gray-500 duration-15" />
                        </a>
                        <a href="#">
                           <Youtube className="w-6 h-6 hover:text-gray-500 duration-15" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
