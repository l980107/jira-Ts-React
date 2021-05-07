import { useState } from "react";

export const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons);
  const add = (person: T) => setValue([...value, person]);
  const clear = () => setValue([]);
  const removeIndex = (index: number) => {
    const copyValue = [...value];
    copyValue.splice(index, 1);
    setValue(copyValue);
  };

  return {
    value,
    setValue,
    add,
    clear,
    removeIndex,
  };
};
