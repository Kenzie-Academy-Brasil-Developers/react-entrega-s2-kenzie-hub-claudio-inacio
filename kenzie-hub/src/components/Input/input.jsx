import { Container, InputContainer, NameInput } from "./styleInput";

const Input = ({ label, icon: Icon, name, register, error, ...rest }) => {
  return (
    <Container>
      <NameInput>
        {label}
        {!!error && <span> - {error}</span>}
      </NameInput>

      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}

        <input {...register(`${name}`)} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
