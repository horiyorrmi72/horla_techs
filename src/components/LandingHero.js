'use client'
import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import maitainanceImg from '../../public/undraw_maintenance_rjtm.svg'

const LandingHero = () => {
    return (
        <>
            {/* JSON-LD Structured Data with Services & Ratings */}
            <Script
                id="horlatechs-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "HorlaTechs",
                        "url": "https://www.horlatechs.com",
                        "logo": "https://www.horlatechs.com/logo.png",
                        "description": "HorlaTechs delivers top-tier software engineering, web development, mobile app development, CRM solutions, and backend services.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Lagos",
                            "addressRegion": "Lagos State",
                            "addressCountry": "Nigeria"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+234-800-123-4567",
                            "contactType": "customer service",
                            "areaServed": "NG"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Software Engineering",
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.8",
                                            "ratingCount": "134"
                                        }
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Web Development",
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.7",
                                            "ratingCount": "121"
                                        }
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Mobile App Development",
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.9",
                                            "ratingCount": "98"
                                        }
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "CRM Solutions",
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.6",
                                            "ratingCount": "87"
                                        }
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Backend Services",
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.8",
                                            "ratingCount": "113"
                                        }
                                    }
                                }
                            ]
                        },
                        "inMaintenanceMode": true
                    })
                }}
            />

            <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                            🚧 We’re Upgrading for a Better <span className="text-blue-600">Digital Experience</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
                            HorlaTechs is currently undergoing scheduled maintenance to bring you faster,
                            smarter, and more reliable <strong>software solutions</strong>,
                            including <strong>web development</strong>, <strong>mobile apps</strong>,
                            <strong>CRM platforms</strong>, and <strong>backend services</strong>.
                            Based in Lagos, Nigeria, we’re preparing to launch a new experience tailored for
                            businesses worldwide.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/services"
                                className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-full font-semibold transition"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Image / Illustration */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src={maitainanceImg}
                            alt="HorlaTechs website under maintenance"
                            className="max-w-md w-full"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default LandingHero
