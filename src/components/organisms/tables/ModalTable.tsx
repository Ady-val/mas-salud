'use client';

import React, { useCallback, useState } from 'react';
import { SharedSelection } from '@heroui/system';
import { TableProps } from '@mas-salud/interfaces/table';
import { Item } from '@mas-salud/types/table';

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
} from '../../atoms';

const ModalTable: React.FC<TableProps> = ({
  headers,
  data,
  count,
  rowsPerPage,
  currentPage = 1,
  isLoading = false,
  onPageChange,
  onSelectionChange,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(
    new Set([]),
  );
  const [page, setPage] = React.useState(currentPage);
  const pages = Math.ceil(count / rowsPerPage);

  const renderCell = useCallback(
    (menuItem: Item, columnKey: string | number) => {
      const cellValue = getKeyValue(menuItem, columnKey);
      const header = headers.find((header) => header.key === columnKey);

      if (header?.cell) {
        return header.cell(cellValue, menuItem);
      }

      return cellValue;
    },
    [],
  );

  const handleSelectionChange = useCallback(
    (keys: SharedSelection) => {
      setSelectedKeys(keys);

      if (!keys || (keys instanceof Set && keys.size === 0)) {
        onSelectionChange?.(null);
      } else {
        onSelectionChange?.(
          typeof keys?.currentKey === 'string' ? keys.currentKey : '',
        );
      }
    },
    [onSelectionChange],
  );

  const handleChangePage = (page: number) => {
    setPage(page);
    onPageChange(page);
  };

  return (
    <div className='flex flex-col gap-3'>
      <Table
        aria-label='Controlled table'
        selectedKeys={selectedKeys}
        selectionMode='single'
        color='primary'
        onSelectionChange={handleSelectionChange}
        bottomContent={
          pages > 0 ? (
            <div className='flex w-full justify-center'>
              <Pagination
                isCompact
                showControls
                showShadow
                color='secondary'
                page={page}
                total={pages}
                onChange={handleChangePage}
              />
            </div>
          ) : null
        }
        classNames={{
          wrapper: 'min-h-[380px]',
          th: 'bg-secondary text-white font-normal',
          tr: 'border-b border-gray-200 h-[48px]',
        }}
      >
        <TableHeader columns={headers}>
          {(column) => (
            <TableColumn key={column.key} {...column.props}>
              {column.label}
            </TableColumn>
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
                <TableCell className='px-1 py-0.5'>
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ModalTable;
