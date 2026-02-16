export type DrawingManagementTableColumn = {
  id: string;
  label: string;
  headerClassName?: string;
};

export const DRAWING_MANAGEMENT_TABLE_COLUMNS: DrawingManagementTableColumn[] =
  [
    { id: 'detail', label: '詳細', headerClassName: 'w-[90px]' },
    { id: 'file-name', label: 'ファイル名' },
    { id: 'drawing-number', label: '図面番号' },
    { id: 'external-drawing-number', label: '外部図面番号' },
    { id: 'author-name', label: '作者名' },
    { id: 'updater-name', label: '更新者名' },
    { id: 'partner-name', label: '取引先名' },
    { id: 'drawing-category', label: '図面カテゴリ' },
    { id: 'page-number', label: 'ページ番号', headerClassName: 'w-[90px]' },
    {
      id: 'similarity-visible',
      label: '類似検索表示',
      headerClassName: 'w-[120px]',
    },
    { id: 'note', label: '備考' },
    { id: 'created-at', label: '作成日' },
    { id: 'updated-at', label: '更新日時' },
    { id: 'revision', label: 'リビ', headerClassName: 'w-[90px]' },
    { id: 'delete', label: '削除', headerClassName: 'w-[90px]' },
  ];
