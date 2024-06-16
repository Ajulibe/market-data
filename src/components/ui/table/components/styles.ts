import styled from "styled-components";

const StyledTableContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
`;

const StyledTableHeader = styled.thead`
  & tr {
    border-bottom: 1px solid;
  }
`;

const StyledTableBody = styled.tbody`
  & tr:last-child {
    border: 0;
  }
`;

const StyledTableFooter = styled.tfoot`
  border-top: 1px solid;
  background-color: rgba(${({ theme }) => theme.colors.mutedColor}, 0.5);
  font-weight: 500;

  & > tr:last-child {
    border-bottom: 0;
  }
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(${({ theme }) => theme.colors.mutedColor}, 0.5);
  }

  &[data-state="selected"] {
    background-color: rgba(${({ theme }) => theme.colors.mutedColor}, 1);
  }
`;

const StyledTableHead = styled.th`
  height: 3rem;
  padding: 0 1rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mutedForeground};

  &[role="checkbox"] {
    padding-right: 0;
  }
`;

const StyledTableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;

  &[role="checkbox"] {
    padding-right: 0;
  }
`;

const StyledTableCaption = styled.caption`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedColor};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1rem 0;
`;

export {
  StyledTableContainer,
  StyledTable,
  StyledTableHeader,
  StyledTableBody,
  StyledTableFooter,
  StyledTableRow,
  StyledTableHead,
  StyledTableCell,
  StyledTableCaption,
  FlexContainer,
};
