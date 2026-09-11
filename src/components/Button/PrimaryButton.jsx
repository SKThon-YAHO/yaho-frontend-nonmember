import styled from "styled-components";

function PrimaryButton({
  children,
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

export default PrimaryButton;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #111827;
  color: #ffffff;
  font-family: inherit;
  font-size: ${({ $fontSize }) => $fontSize || 15}px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #1f2937;
  }

  &:active {
    background-color: #0b1220;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;
