'use client';

import { CheckCircle2, Download, LayoutGrid, List, Search, SlidersHorizontal, FileImage } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/shared/ui/shadcn/ui/button';
import { Input } from '@/shared/ui/shadcn/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/shadcn/ui/tooltip';
import { DrawingManagementTableSettingsModal } from './DrawingManagementTableSettingsModal';

export function DrawingManagementFilterBar() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTableSettingsOpen, setIsTableSettingsOpen] = useState(false);

  return (
    <section className='flex flex-wrap items-center gap-3 border-b bg-white px-6 py-3'>
      <div className='flex items-center gap-2'>
        <div className='flex h-12 items-center gap-1 rounded-lg border bg-background p-0.5'>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                aria-label='リスト表示'
                onClick={() => setViewMode('list')}
                className={
                  viewMode === 'list'
                    ? 'h-10 w-10 bg-[#30B6C8] px-0 text-white hover:bg-[#2aa7b7] hover:text-white'
                    : 'h-10 w-10 px-0 text-[#30B6C8] hover:bg-[#30B6C8]/10 hover:text-[#30B6C8]'
                }
              >
                <List className='h-5 w-5' />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='bottom'>リスト表示</TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                aria-label='グリッド表示'
                onClick={() => setViewMode('grid')}
                className={
                  viewMode === 'grid'
                    ? 'h-10 w-10 bg-[#30B6C8] px-0 text-white hover:bg-[#2aa7b7] hover:text-white'
                    : 'h-10 w-10 px-0 text-[#30B6C8] hover:bg-[#30B6C8]/10 hover:text-[#30B6C8]'
                }
              >
                <LayoutGrid className='h-5 w-5' />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='bottom'>グリッド表示</TooltipContent>
          </Tooltip>
        </div>
        <Button
          variant='outline'
          size='lg'
          className='h-12 gap-2 border-[#30B6C8] px-4 text-[#30B6C8] hover:bg-[#30B6C8]/10 hover:text-[#30B6C8]'
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
            className='h-12 pl-9'
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
        <Button
          variant='outline'
          size='lg'
          className='h-12 gap-2 px-4'
          onClick={() => {
            setIsTableSettingsOpen(true);
          }}
        >
          <SlidersHorizontal className='size-4' />
          テーブル設定
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='h-12 gap-2 px-4'
          onClick={() => {
            // TODO: API呼び出し
            alert('一括操作（未実装）');
          }}
        >
          <List className='size-4' />
          一括操作
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='h-12 gap-2 px-4'
          onClick={() => {
            // TODO: API呼び出し
            alert('CSV出力（未実装）');
          }}
        >
          <Download className='size-4' />
          CSV出力
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='h-12 gap-2 px-4 bg-[#30B6C8] text-white hover:bg-[#2aa7b7] hover:text-white'
          onClick={() => {
            alert('類似図面検索（未実装）');
          }}
        >
          <Search className='size-4' />
          類似図面検索
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='h-12 gap-2 px-4 bg-[#30B6C8] text-white hover:bg-[#2aa7b7] hover:text-white'
          onClick={() => {
            alert('図面登録（未実装）');
          }}
        >
          <FileImage className='size-4' />
          図面登録
        </Button>
      </div>
      <DrawingManagementTableSettingsModal
        open={isTableSettingsOpen}
        onOpenChange={setIsTableSettingsOpen}
      />
    </section>
  );
}
