import styled from 'styled-components';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import CardContent from '@mui/material/CardContent';

export const EmployeeAddButton = styled(Button)`
  float: right;
  background-color: blue !important;
  font-weight: bold !important;
  border-radius: 30px !important;
  margin-left: 8px !important;
`;

export const DynamicChangeButton = styled(IconButton)`
  float: right;
  background-color: blue !important;
  font-weight: bold !important;
  margin-left: 8px !important;
  color: white !important;
`;

export const SortButton = styled(IconButton)`
  margin-left: 0px !important;
  color: white !important;
`;

export const TableHeader = styled(TableHead)`
  background-color: orange !important;
`;

export const TableCellColumn = styled(TableCell)`
  color: white !important;
  font-weight: bold !important;
`;

export const DynamicDeleteButton = styled(IconButton)`
  float: right;
  background-color: red !important;
  font-weight: bold !important;
  margin-left: 8px !important;
  color: white !important;
  margin-bottom: 8px !important;
`;

export const DynamicEditButton = styled(IconButton)`
  float: right;
  background-color: orange !important;
  font-weight: bold !important;
  margin-left: 8px !important;
  color: white !important;
`;

export const CardActionsArea = styled(IconButton)`
  float: right;
`;

export const CardContentArea = styled(CardContent)`
  padding-bottom: 0px !important;
`;

export const SearchButton = styled(Button)`
  height: 40px !important;
  margin-top: 8px !important;
`;
