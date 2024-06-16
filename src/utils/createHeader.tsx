import Button from "@/components/ui/button";
import styled from "styled-components";

const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.mutedColor};
  svg {
    margin-right: 4px;
    font-size: 14px;
  }
`;

export function createHeader(column: any, label: string) {
  return (
    <Button
      variant="invisible"
      size="small"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      <ChildrenWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-up-down"
        >
          <path d="m21 16-4 4-4-4" />
          <path d="M17 20V4" />
          <path d="m3 8 4-4 4 4" />
          <path d="M7 4v16" />
        </svg>
        {label}
      </ChildrenWrapper>
    </Button>
  );
}
