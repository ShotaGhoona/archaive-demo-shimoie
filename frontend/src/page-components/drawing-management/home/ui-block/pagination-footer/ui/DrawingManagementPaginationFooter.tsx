'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/shadcn/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/shadcn/ui/select';

export function DrawingManagementPaginationFooter() {
  return (
    <section className='flex flex-wrap items-center gap-4 border-t bg-white px-6 py-3 text-sm text-muted-foreground'>
      <div>22877件中 1-20件を表示</div>
      <Pagination className='flex-1'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#' isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className='flex items-center gap-2'>
        <span>表示件数:</span>
        <Select defaultValue='20'>
          <SelectTrigger className='h-8 w-[90px]'>
            <SelectValue placeholder='20' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='20'>20</SelectItem>
            <SelectItem value='50'>50</SelectItem>
            <SelectItem value='100'>100</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
