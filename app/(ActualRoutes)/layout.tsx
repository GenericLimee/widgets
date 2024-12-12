'use client'

import { ReactNode } from 'react';
import { useMobileDetect } from '@/customHooks';

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useMobileDetect().isMobile();

  return isMobile ? (
    <div className="flex items-center justify-center w-full h-full">
      <div>
        <div className="text-3xl">Sorry but this app does not work with mobile devices.</div> <br/> (Well technichally it does, but it looks horrible.)
      </div>
    </div>
  ) : children;
}
