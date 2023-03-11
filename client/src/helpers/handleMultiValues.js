export const handleMultiValues = (val, setValue, data, parameter) => {
  const arr = data[parameter];
  const selectedVal = arr?.find((selected) => selected == val);

  if (!selectedVal) {
    setValue({
      ...data,
      [parameter]: [val, ...data?.generos],
    });
  } else {
    setValue({
      ...data,
      [parameter]: [
        ...data[parameter].filter((valInparameter) => valInparameter !== val),
      ],
    });
  }
};
