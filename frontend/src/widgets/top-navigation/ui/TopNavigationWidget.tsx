'use client';

import { Settings, UserCircle } from 'lucide-react';

import { Button } from '@/shared/ui/shadcn/ui/button';

const NAV_ITEMS = ['図面管理', '案件管理', '帳票管理', '取引先管理'];

export function TopNavigationWidget() {
  return (
    <header className='flex h-14 items-center gap-6 bg-[#30B6C8] px-6 text-white'>
      <div className='flex items-center gap-2 text-base font-semibold'>
        <span className='text-lg'>ARCHAIVE</span>
      </div>
      <nav className='flex flex-1 items-center gap-6 text-sm'>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className='rounded-full px-3 py-1 transition hover:bg-white/15'
            type='button'
            onClick={() => {
              // TODO: API呼び出し
              alert(`${item}へ遷移（未実装）`);
            }}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className='flex items-center gap-4 text-sm'>
        <Button
          variant='ghost'
          className='text-white hover:bg-white/15 hover:text-white'
          onClick={() => {
            // TODO: API呼び出し
            alert('設定を開く（未実装）');
          }}
        >
          <Settings className='size-4' />
          設定
        </Button>
        <div className='flex items-center gap-2 rounded-full bg-white/15 px-3 py-1'>
          <UserCircle className='size-4' />
          user_demo_201
        </div>
      </div>
    </header>
  );
}
