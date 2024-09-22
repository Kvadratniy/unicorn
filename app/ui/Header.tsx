'use client'
  import Image from "next/image";
  import Link from 'next/link'
  import UserButton from '@/app/ui/UserButton';

  export default function HeaderComponent() {
    return (
      <header className='h-[60px] flex px-md items-center justify-between border-1 border-b border-gray-200'>
        <div className="flex">
          <Image
            src="/logo2.png"
            width={140}
            height={20}
            priority alt={''}
          />
        </div>
        {/* <div className='flex gap-2 text-sm'>
          <Link href="/crm/user" className='text-gray-900 hover:text-gray-600 text-sm'>
            CRM
          </Link>
          <Link href="/news" className='text-gray-900 hover:text-gray-600 text-sm'>
            Новости
          </Link>
        </div> */}
        <div className="flex">
          <UserButton/>
        </div>
      </header>
    );
  }