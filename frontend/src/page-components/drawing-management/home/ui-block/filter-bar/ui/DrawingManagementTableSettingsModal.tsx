'use client';

import {
  Eye,
  GripVertical,
  LayoutList,
  ListFilter,
  Settings2,
} from 'lucide-react';

import { Button } from '@/shared/ui/shadcn/ui/button';
import { Checkbox } from '@/shared/ui/shadcn/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/shared/ui/shadcn/ui/dialog';
import { VisuallyHidden } from '@/shared/ui/shadcn/ui/visually-hidden';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/shadcn/ui/tabs';
import { DRAWING_MANAGEMENT_TABLE_COLUMNS } from '../../table-view/config/column-config';

type DrawingManagementTableSettingsModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DrawingManagementTableSettingsModal({
  open,
  onOpenChange,
}: DrawingManagementTableSettingsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-5xl p-0 sm:max-w-5xl'>
        <VisuallyHidden>
          <DialogTitle>テーブル設定</DialogTitle>
        </VisuallyHidden>
        <div className='flex h-[80vh] min-h-[560px] flex-col overflow-hidden'>
          <Tabs defaultValue='display' className='flex min-h-0 flex-1 flex-col'>
            <div className='px-6 pt-6'>
              <TabsList className='h-auto w-full justify-start gap-8 rounded-none border-b border-muted bg-transparent p-0 text-sm'>
                <TabsTrigger
                  value='display'
                  className='rounded-none border-0 border-b-2 border-transparent px-0 pb-4 text-base font-semibold text-muted-foreground shadow-none hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-[#30B6C8] data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none'
                >
                  <LayoutList className='size-4' />
                  テーブル表示設定
                </TabsTrigger>
                <TabsTrigger
                  value='table'
                  className='rounded-none border-0 border-b-2 border-transparent px-0 pb-4 text-base font-semibold text-muted-foreground shadow-none hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-[#30B6C8] data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none'
                >
                  <Settings2 className='size-4' />
                  テーブル項目設定
                </TabsTrigger>
                <TabsTrigger
                  value='filter'
                  className='rounded-none border-0 border-b-2 border-transparent px-0 pb-4 text-base font-semibold text-muted-foreground shadow-none hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-[#30B6C8] data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none'
                >
                  <ListFilter className='size-4' />
                  フィルター表示設定
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value='display'
              className='flex min-h-0 flex-1 flex-col px-6 pb-6'
            >
              <div className='flex items-center justify-between pt-4 text-sm text-muted-foreground'>
                <p>
                  ドラッグで順序を変更、チェックで表示/非表示を切り替えできます
                </p>
                <span>
                  {DRAWING_MANAGEMENT_TABLE_COLUMNS.length} /{' '}
                  {DRAWING_MANAGEMENT_TABLE_COLUMNS.length} 列を表示
                </span>
              </div>
              <div className='mt-4 rounded-lg border'>
                <div className='max-h-[420px] overflow-y-auto overflow-x-hidden'>
                  {DRAWING_MANAGEMENT_TABLE_COLUMNS.map((column) => (
                    <div
                      key={column.id}
                      className='flex items-center gap-3 border-b px-4 py-3 last:border-b-0'
                    >
                      <GripVertical className='size-4 text-muted-foreground' />
                      <Eye className='size-4 text-muted-foreground' />
                      <span className='text-sm font-medium text-foreground'>
                        {column.label}
                      </span>
                      <Checkbox className='ml-auto' defaultChecked />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value='table'
              className='min-h-0 flex-1 overflow-y-auto bg-white px-6 pb-6 pt-4'
            />

            <TabsContent
              value='filter'
              className='min-h-0 flex-1 overflow-y-auto bg-white px-6 pb-6 pt-4'
            />
          </Tabs>

          <div className='flex flex-wrap items-center justify-between gap-2 border-t bg-white px-6 py-4'>
            <div className='flex flex-wrap items-center gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  // TODO: API呼び出し
                  alert('リセット（未実装）');
                }}
              >
                リセット
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  // TODO: API呼び出し
                  alert('全て非表示（未実装）');
                }}
              >
                全て非表示
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => {
                  // TODO: API呼び出し
                  alert('全て表示（未実装）');
                }}
              >
                全て表示
              </Button>
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={() => onOpenChange(false)}
              >
                キャンセル
              </Button>
              <Button
                size='sm'
                className='bg-[#30B6C8] text-white hover:bg-[#2aa7b7] hover:text-white'
                onClick={() => {
                  // TODO: API呼び出し
                  alert('適用（未実装）');
                }}
              >
                適用
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
