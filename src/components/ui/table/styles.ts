import styled from "styled-components";

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.tableBackground};
  /* border: 1px solid ${({ theme }) => theme.colors.tableBorder}; */
  border-radius: 4px;
  box-shadow:
    0 0 #0000,
    0 0 #0000,
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem 0;
  padding-right: 10px;
  overflow: scroll;

  @media (max-width: 610px) {
    button {
      display: none;
    }
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    padding: 8px;
    width: 50px;
    outline: none;
    box-shadow: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.background};
    border-style: unset;
  }

  @media (max-width: 360px) {
    div,
    strong {
      display: none;
    }

    input {
      width: 40px;
    }
  }
`;
