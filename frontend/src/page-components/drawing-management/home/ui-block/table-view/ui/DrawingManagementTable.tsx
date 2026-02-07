'use client';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/shared/ui/shadcn/ui/button';
import { Badge } from '@/shared/ui/shadcn/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/shadcn/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/shadcn/ui/table';

import { dummyDrawingRows } from '../../../dummy-data/samples';

export function DrawingManagementTable() {
  return (
    <div className='flex min-h-0 flex-1 flex-col bg-white'>
      <div className='min-h-0 flex-1 overflow-auto'>
        <Table className='min-w-[1200px]'>
          <TableHeader className='sticky top-0 z-10 bg-slate-100'>
            <TableRow>
              <TableHead className='w-[90px]'>詳細</TableHead>
              <TableHead>ファイル名</TableHead>
              <TableHead>図面番号</TableHead>
              <TableHead>外部図面番号</TableHead>
              <TableHead className='w-[90px]'>ページ番号</TableHead>
              <TableHead className='w-[120px]'>類似検索表示</TableHead>
              <TableHead>備考</TableHead>
              <TableHead>作成日</TableHead>
              <TableHead>更新日時</TableHead>
              <TableHead className='w-[90px]'>リビ</TableHead>
              <TableHead className='w-[90px]'>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyDrawingRows.map((row) => (
              <TableRow key={row.id} className='hover:bg-slate-50'>
                <TableCell>
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={() => {
                      // TODO: API呼び出し
                      alert(`詳細を開く（未実装）: ${row.fileName}`);
                    }}
                  >
                    開く
                  </Button>
                </TableCell>
                <TableCell className='font-medium'>{row.fileName}</TableCell>
                <TableCell>{row.drawingNumber}</TableCell>
                <TableCell>{row.externalDrawingNumber || '-'}</TableCell>
                <TableCell>{row.pageNumber}</TableCell>
                <TableCell>
                  <Badge
                    variant='secondary'
                    className={
                      row.similarityVisible
                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
                        : 'bg-slate-200 text-slate-600 hover:bg-slate-200'
                    }
                  >
                    {row.similarityVisible ? '表示' : '非表示'}
                  </Badge>
                </TableCell>
                <TableCell>{row.note || '-'}</TableCell>
                <TableCell className='text-muted-foreground'>
                  {row.createdAt}
                </TableCell>
                <TableCell className='text-muted-foreground'>
                  {row.updatedAt}
                </TableCell>
                <TableCell>{row.revision}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon'>
                        <MoreHorizontal className='size-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem
                        onClick={() => {
                          // TODO: API呼び出し
                          alert(`詳細を開く（未実装）: ${row.fileName}`);
                        }}
                      >
                        詳細を開く
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          // TODO: API呼び出し
                          alert(`編集（未実装）: ${row.fileName}`);
                        }}
                      >
                        編集
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className='text-destructive'
                        onClick={() => {
                          // TODO: API呼び出し
                          alert(`削除（未実装）: ${row.fileName}`);
                        }}
                      >
                        削除
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
