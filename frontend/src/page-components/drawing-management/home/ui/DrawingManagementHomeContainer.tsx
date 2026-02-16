'use client';

import { useState } from 'react';

import { TopNavigationWidget } from '@/widgets/top-navigation/ui/TopNavigationWidget';

import { DrawingManagementFilterBar } from '../ui-block/filter-bar/ui/DrawingManagementFilterBar';
import { DrawingManagementGallery } from '../ui-block/gallery-view/ui/DrawingManagementGallery';
import { DrawingManagementPaginationFooter } from '../ui-block/pagination-footer/ui/DrawingManagementPaginationFooter';
import { DrawingManagementTable } from '../ui-block/table-view/ui/DrawingManagementTable';

export function DrawingManagementHomeContainer() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  return (
    <div className='flex h-screen flex-col bg-slate-50'>
      <TopNavigationWidget />
      <main className='flex min-h-0 flex-1 flex-col'>
        <DrawingManagementFilterBar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <div className='flex min-h-0 flex-1 flex-col'>
          {viewMode === 'list' ? (
            <DrawingManagementTable />
          ) : (
            <DrawingManagementGallery />
          )}
        </div>
        <DrawingManagementPaginationFooter />
      </main>
    </div>
  );
}
