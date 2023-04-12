import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  securary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  heigth: 40px;

  ${(props) => {
    return `background-color ${buttonVariants[props.variant]}`;
  }}
`;
