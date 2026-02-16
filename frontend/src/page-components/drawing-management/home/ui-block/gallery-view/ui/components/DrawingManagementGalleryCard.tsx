'use client';

import { CalendarDays, FileImage, FileText, Trash2 } from 'lucide-react';

import { Badge } from '@/shared/ui/shadcn/ui/badge';
import { Button } from '@/shared/ui/shadcn/ui/button';
import { Card, CardContent, CardFooter } from '@/shared/ui/shadcn/ui/card';

import type { DrawingRow } from '../../../../dummy-data/samples';

type Props = {
  row: DrawingRow;
};

export function DrawingManagementGalleryCard({ row }: Props) {
  return (
    <Card className='gap-0 overflow-hidden py-0'>
      <div className='relative border-b bg-slate-100 p-5'>
        <div className='aspect-[4/3] rounded-md border bg-white p-3 shadow-sm'>
          {row.previewImageUrl ? (
            <div
              role='img'
              aria-label={row.fileName}
              className='h-full w-full rounded-sm bg-cover bg-center'
              style={{ backgroundImage: `url(${row.previewImageUrl})` }}
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center rounded-sm border-2 border-dashed border-slate-200 bg-slate-50'>
              <FileImage className='size-10 text-slate-400' />
            </div>
          )}
        </div>
      </div>
      <CardContent className='space-y-2 px-4 py-3'>
        <p className='line-clamp-2 text-2xl font-semibold leading-tight text-slate-800'>
          {row.fileName}
        </p>
        <div className='space-y-1.5 text-xs text-slate-600'>
          <p className='flex items-center gap-1.5'>
            <FileText className='size-3.5' />
            {row.drawingNumber}
          </p>
          <p className='flex items-center gap-1.5'>
            <CalendarDays className='size-3.5' />
            {row.updatedAt}
          </p>
        </div>
      </CardContent>
      <CardFooter className='grid grid-cols-2 gap-2 border-t px-4 py-3'>
        <Button
          variant='outline'
          size='sm'
          className='h-8'
          onClick={() => {
            // TODO: API呼び出し
            alert(`詳細を開く（未実装）: ${row.fileName}`);
          }}
        >
          詳細
        </Button>
        <Button
          variant='outline'
          size='sm'
          className='h-8 text-destructive hover:text-destructive'
          onClick={() => {
            // TODO: API呼び出し
            alert(`削除（未実装）: ${row.fileName}`);
          }}
        >
          <Trash2 className='size-4' />
          削除
        </Button>
      </CardFooter>
    </Card>
  );
}
