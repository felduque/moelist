export const handleMultiValues = (val, func, data, parameter) => {
  const arr = data[parameter];
  const selectedVal = arr.find((selected) => selected == val);

  if (!selectedVal) {
    func({
      ...data,
      [parameter]: [val, ...data.generos],
    });
  } else {
    func({
      ...data,
      [parameter]: [
        ...data[parameter].filter((valInparameter) => valInparameter !== val),
      ],
    });
  }
};
