'use client';

import { TopNavigationWidget } from '@/widgets/top-navigation/ui/TopNavigationWidget';

import { DrawingManagementFilterBar } from '../ui-block/filter-bar/ui/DrawingManagementFilterBar';
import { DrawingManagementPaginationFooter } from '../ui-block/pagination-footer/ui/DrawingManagementPaginationFooter';
import { DrawingManagementTable } from '../ui-block/table-view/ui/DrawingManagementTable';

export function DrawingManagementHomeContainer() {
  return (
    <div className='flex h-screen flex-col bg-slate-50'>
      <TopNavigationWidget />
      <main className='flex min-h-0 flex-1 flex-col'>
        <DrawingManagementFilterBar />
        <div className='flex min-h-0 flex-1 flex-col'>
          <DrawingManagementTable />
        </div>
        <DrawingManagementPaginationFooter />
      </main>
    </div>
  );
}
