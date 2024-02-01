import InputField, { InputFieldProps } from "@src/ui-components/InputField";
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

const HookFormInput = <T extends FieldValues>(
  props: UseControllerProps<T> & InputFieldProps
): JSX.Element => {
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController(props);
  return (
    <InputField
      {...field}
      inputRef={ref}
      {...props}
      error={!!error}
      helperText={!!error && error.message}
    />
  );
};

export default HookFormInput;