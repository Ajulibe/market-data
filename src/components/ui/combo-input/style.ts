import Button from "@/components/ui/button";
import styled from "styled-components";

export const PopoverContainer = styled.div`
  position: relative;
`;

export const PopoverTriggerButton = styled(Button)`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const PopoverContentContainer = styled.div`
  width: 200px;
  padding: 0;
  position: absolute;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
`;
