'use client';

import { CheckCircle2, Download, LayoutGrid, List, Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/shared/ui/shadcn/ui/button';
import { Input } from '@/shared/ui/shadcn/ui/input';

export function DrawingManagementFilterBar() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className='flex flex-wrap items-center gap-3 border-b bg-white px-6 py-3'>
      <div className='flex items-center gap-2'>
        <Button
          variant={viewMode === 'list' ? 'secondary' : 'outline'}
          size='icon'
          aria-label='リスト表示'
          onClick={() => setViewMode('list')}
        >
          <List className='size-4' />
        </Button>
        <Button
          variant={viewMode === 'grid' ? 'secondary' : 'outline'}
          size='icon'
          aria-label='グリッド表示'
          onClick={() => setViewMode('grid')}
        >
          <LayoutGrid className='size-4' />
        </Button>
        <Button
          variant='outline'
          className='gap-2'
          onClick={() => {
            // TODO: API呼び出し
            alert('詳細フィルターを開く（未実装）');
          }}
        >
          <SlidersHorizontal className='size-4' />
          詳細フィルター
        </Button>
      </div>
      <div className='flex min-w-[260px] flex-1 items-center gap-2'>
        <div className='relative w-full max-w-xl'>
          <Search className='pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            className='pl-9'
            placeholder='キーワードで検索 (Enterで検索)'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                // TODO: API呼び出し
                alert(`検索を実行（未実装）: ${searchQuery}`);
              }
            }}
          />
        </div>
      </div>
      <div className='ml-auto flex items-center gap-3 text-sm text-muted-foreground'>
        <div className='flex items-center gap-2 text-emerald-600'>
          <CheckCircle2 className='size-4' />
          保存済み
        </div>
        <Button
          variant='outline'
          className='gap-2'
          onClick={() => {
            // TODO: API呼び出し
            alert('CSV出力（未実装）');
          }}
        >
          <Download className='size-4' />
          CSV出力
        </Button>
      </div>
    </section>
  );
}
