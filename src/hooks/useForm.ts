import { useEffect, useState } from "react";

interface IUseFormProps<T> {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>;
}
function useForm<T extends object>({
  initialValue,
  validate,
}: IUseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValue);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeText = (name: keyof T, text: string) => {
    setValues({
      ...values,
      [name]: text,
    });
  };

  const handlePhoneNum = (name: keyof T, text: string) => {
    if (text.length === 10) {
      setValues({
        ...values,
        [name]: text.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"),
      });
    } else if (text.length === 13) {
      setValues({
        ...values,
        [name]: text
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
      });
    } else {
      setValues({
        ...values,
        [name]: text,
      });
    }
  };

  const handleBlur = (name: keyof T) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleGenderChange = (gender: string) => {
    setValues({ ...values, gender: gender });
  };

  const getGenderButtonProps = (name: keyof T, gender: string) => {
    const onClick = () => handleGenderChange(gender);

    let selected = false;

    if ("gender" in values) {
      selected = values.gender === gender;
    }

    const onBlur = () => handleBlur(name);

    return { onClick, onBlur, selected };
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeText(name, e.target.value);
    const onBlur = () => handleBlur(name);
    return { value, onChange, onBlur };
  };

  const getPhoneNumInputProps = (name: keyof T) => {
    const value = values[name];
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      handlePhoneNum(name, e.target.value);
    const onBlur = () => handleBlur(name);
    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return {
    getTextInputProps,
    touched,
    getPhoneNumInputProps,
    getGenderButtonProps,
    values,
    errors,
  };
}

export default useForm;
