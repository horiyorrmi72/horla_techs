'use client'
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Script from 'next/script'

const Footer = () => {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <Script
                id="horlatechs-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "HorlaTechs",
                        url: "https://www.horlatechs.com",
                        logo: "https://www.horlatechs.com/logo.png",
                        description:
                            "HorlaTechs is a Lagos, Nigeria–based software development company specializing in custom web development, mobile applications, CRM systems, and secure backend services. We deliver fast, scalable, and innovative digital solutions that help businesses grow locally and globally.",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Itire Road,Mushin",
                            addressLocality: "Lagos",
                            addressRegion: "LA",
                            postalCode: "100001",
                            addressCountry: "Nigeria"
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+234-909-517-6621",
                            contactType: "Customer Support",
                            areaServed: "NG",
                            availableLanguage: ["English"]
                        },
                        sameAs: [
                            "https://facebook.com/horlatechs",
                            "https://twitter.com/horlatechs",
                            "https://instagram.com/horlatechs",
                            "https://linkedin.com/company/horlatechs"
                        ]
                    })
                }}
            />

            <footer className="bg-black/90 text-white py-10 mt-10">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-lg font-bold mb-3">HorlaTechs</h2>
                        <p className="text-sm text-gray-300">
                            HorlaTechs is a Lagos, Nigeria–based software development company
                            specializing in custom web development, mobile applications, CRM
                            systems, and secure backend services. We deliver fast, scalable, and
                            innovative digital solutions that help businesses locally and
                            globally grow, automate, and thrive in the modern digital era.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-3">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services#software-development" className="hover:text-blue-400 transition">Software Development</Link></li>
                            <li><Link href="/services#web" className="hover:text-blue-400 transition">Web Development</Link></li>
                            <li><Link href="/services#mobile" className="hover:text-blue-400 transition">Mobile Applications</Link></li>
                            <li><Link href="/services#crm" className="hover:text-blue-400 transition">CRM Solutions</Link></li>
                            <li><Link href="/services#backend" className="hover:text-blue-400 transition">Backend Services</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com/horlatechs" target="_blank"><Facebook className="hover:text-blue-500 transition" /></Link>
                            <Link href="https://twitter.com/horlatechs" target="_blank"><Twitter className="hover:text-blue-400 transition" /></Link>
                            <Link href="https://instagram.com/horlatechs" target="_blank"><Instagram className="hover:text-pink-500 transition" /></Link>
                            <Link href="https://linkedin.com/company/horlatechs" target="_blank"><Linkedin className="hover:text-blue-600 transition" /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} HorlaTechs. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer
