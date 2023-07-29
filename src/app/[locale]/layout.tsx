import './globals.css'
import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import React from "react";

export  function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'fr'} , {locale: 'fr'} , {locale: 'ko'}];
}

export const metadata: Metadata = {
    title: 'Multi united',
    description: '--',
}

export default async function RootLayout({children, params: {locale}}: {
    children: React.ReactElement,
    params: { locale?: string }
}) {

    let messages;

    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body className="no-transition font-cabin subpixel-antialiased overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    )
}
