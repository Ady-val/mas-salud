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

  // const handleSelectionChange = (keys: SharedSelection) => {
  //   setSelectedKeys(keys);
  //   const selectedKey = Array.from(keys)[0];
  //   const selectedItem = data.find((item) => item.key === selectedKey);

  //   if (selectedItem) onSelectionChange(selectedItem);
  // };

  const handleChangePage = (page: number) => {
    setPage(page);
    setSelectedKeys(new Set());
    onPageChange(page);
  };

  return (
    <div className='flex flex-col gap-3'>
      <Table
        aria-label='Controlled table'
        selectedKeys={selectedKeys}
        selectionMode='single'
        // onSelectionChange={handleSelectionChange}
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
          th: 'bg-secondary text-white font-normal',
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

export default SimpleTable;
