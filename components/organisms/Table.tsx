'use client';

import React, { useState } from 'react';
import { SharedSelection } from '@heroui/system';

import {
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '../atoms';

type Item = Record<string, any>;

interface TableProps {
  headers: {
    key: string;
    label: string;
  }[];
  data: Array<Item>;
  count: number;
  rowsPerPage: number;
  currentPage?: number;
  isLoading?: boolean;
  onPageChange: (page: number) => void;
  onSelectionChange: (item: Item) => void;
}

const SimpleTable: React.FC<TableProps> = ({
  headers,
  data,
  count,
  rowsPerPage,
  currentPage = 1,
  isLoading = false,
  onPageChange,
  onSelectionChange,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(new Set());
  const [page, setPage] = React.useState(currentPage);
  const pages = Math.ceil(count / rowsPerPage);

  const handleSelectionChange = (keys: SharedSelection) => {
    setSelectedKeys(keys);
    const selectedKey = Array.from(keys)[0];
    const selectedItem = data.find((item) => item.key === selectedKey);

    if (selectedItem) onSelectionChange(selectedItem);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
    setSelectedKeys(new Set());
    onPageChange(page);
  };

  return (
    <div className='flex flex-col gap-3'>
      <Table
        aria-label='Controlled table example with dynamic content'
        selectedKeys={selectedKeys}
        selectionMode='single'
        onSelectionChange={handleSelectionChange}
        bottomContent={
          pages > 0 ? (
            <div className='flex w-full justify-center'>
              <Pagination
                isCompact
                showControls
                showShadow
                color='primary'
                page={page}
                total={pages}
                onChange={handleChangePage}
              />
            </div>
          ) : null
        }
      >
        <TableHeader columns={headers}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={data}
          emptyContent={isLoading ? <Spinner /> : 'No hay datos para mostrar'}
          loadingContent={<Spinner />}
          loadingState={isLoading ? 'loading' : 'idle'}
        >
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SimpleTable;
