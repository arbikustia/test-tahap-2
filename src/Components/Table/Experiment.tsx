import { useState } from 'react';
import {
  createColumnHelper,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel
} from '@tanstack/react-table';
import { DATA_USER } from './User';
import { Table as TableComp, TableBody, TableCell, TableHead, TableHeader, TableRow } from '.';
import Button from '../Button';
import Arrow from '@/assets/icons/arrow-up.svg';
import { cn } from '@/Lib/Utils/Class.utils';
import { Checkbox } from 'antd';
import useMessage from '@/Hooks/useMessage';

//TData
type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

const columnHelper = createColumnHelper<User>();

const Exp = () => {
  const { closeMessage, contextHolder, openMessage } = useMessage();
  const [data] = useState<User[]>(DATA_USER);

  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.display({
      id: 'select',
      header: ({ table }) => {
        return (
          <Checkbox
            className="bg-transparent"
            checked={table.getIsAllRowsSelected()}
            onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
            aria-label="select-all"
          />
        );
      },
      cell: ({ row }) => {
        return (
          <Checkbox
            className="bg-transparent"
            checked={row.getIsSelected()}
            onChange={(e) => row.toggleSelected(e.target.checked)}
            aria-label="select-Row"
          />
        );
      },
      enableSorting: false
    }),
    columnHelper.accessor('firstName', {
      header: ({ column }) => {
        return (
          <Button
            variant={'secondary'}
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            <img src={Arrow} width={30} height={30} className={cn('bg-transparent')} /> First Name
          </Button>
        );
      },
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (info) => info.getValue(),
      header: () => 'Last Name',
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('age', {
      header: ({ column }) => {
        return (
          <Button
            variant={'secondary'}
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            <img src={Arrow} width={30} height={30} className={cn('bg-transparent')} /> Age
          </Button>
        );
      },
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('visits', {
      header: () => 'Visits',
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('progress', {
      header: 'Profile Progress',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.display({
      id: 'action',
      header: 'Action',
      cell: () => (
        <>
          <Button
            variant={'primary'}
            onClick={() => {
              openMessage({
                key: 'success',
                mode: 'success',
                title: 'Success',
                message: 'Success',
                action() {
                  closeMessage('success');
                }
              });
            }}>
            PRIMARY
          </Button>
          <Button
            variant={'secondary'}
            onClick={() => {
              openMessage({
                key: 'default',
                mode: 'default',
                title: 'Default',
                message: 'Default',
                action() {
                  closeMessage('default');
                }
              });
            }}>
            SECONDARY
          </Button>
          <Button
            variant={'danger'}
            onClick={() => {
              openMessage({
                key: 'danger',
                mode: 'danger',
                title: 'Danger',
                message: 'Danger',
                action() {
                  closeMessage('danger');
                }
              });
            }}>
            DANGER
          </Button>
          <Button
            variant={'warning'}
            onClick={() => {
              openMessage({
                key: 'warning',
                mode: 'warning',
                title: 'Warning',
                message: 'Warning',
                action() {
                  closeMessage('warning');
                }
              });
            }}>
            WARNING
          </Button>
          <Button
            variant={'info'}
            onClick={() => {
              openMessage({
                key: 'info',
                mode: 'info',
                title: 'Info',
                message: 'Info',
                action() {
                  closeMessage('info');
                }
              });
            }}>
            INFO
          </Button>
        </>
      )
    })
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting
    }
  });

  return (
    <>
      {contextHolder}
      <TableComp>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell isAction={cell.column.columnDef.id === 'action'} key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableComp>
    </>
  );
};

export default Exp;
