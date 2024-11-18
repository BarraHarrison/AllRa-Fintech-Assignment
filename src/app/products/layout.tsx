import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Rubik_Moonrocks } from 'next/font/google'
import { PropsWithChildren, Suspense } from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allra Market',
  description: 'Explore products and details in Allra Market',
}

const rubikMoonrocks = Rubik_Moonrocks({
  weight: '400',
  subsets: ['latin'],
})

export default function ProductLayout({ children }: PropsWithChildren) {
  return (
    <div className={'min-h-screen flex flex-col'}>
      {/* Header Section */}
      <header className={'bg-gray-100 py-4 border-b'}>
        <div className="container flex items-center justify-between">
          <Link href={'/products'} className={'flex items-center gap-2'}>
            <Image src={'/logo.svg'} alt={'Allra Market Logo'} width={50} height={50} />
            <h1
              className={cn(
                rubikMoonrocks.className,
                'text-4xl text-green-500 font-bold'
              )}
            >
              Allra Market
            </h1>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <Suspense>
        <main className={'container flex-1 py-10'}>{children}</main>
      </Suspense>

      {/* Footer Section */}
      <footer className={'bg-green-100 py-4 border-t text-center'}>
        <p>&copy; {new Date().getFullYear()} Allra Market. All rights reserved.</p>
      </footer>
    </div>
  )
}
