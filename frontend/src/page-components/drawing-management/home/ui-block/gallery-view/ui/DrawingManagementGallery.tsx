'use client';

import { NoData } from '@/shared/ui/components/empty-design/ui/NoData';

import { dummyDrawingRows } from '../../../dummy-data/samples';
import { DrawingManagementGalleryCard } from './components/DrawingManagementGalleryCard';

export function DrawingManagementGallery() {
  if (dummyDrawingRows.length === 0) {
    return (
      <div className='flex min-h-0 flex-1 items-center justify-center bg-slate-50'>
        <NoData
          title='図面データがありません'
          description='条件を変更するか、新しい図面を登録してください。'
        />
      </div>
    );
  }

  return (
    <section className='min-h-0 flex-1 overflow-y-auto bg-slate-100 p-5'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {dummyDrawingRows.map((row) => (
          <DrawingManagementGalleryCard key={row.id} row={row} />
        ))}
      </div>
    </section>
  );
}
