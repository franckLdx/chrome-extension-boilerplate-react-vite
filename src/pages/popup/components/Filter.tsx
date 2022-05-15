import React, { ChangeEventHandler, FC } from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../services/filter";

export const Filter: FC = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setFilter(event.target.value);

  return (
    <>
      <input
        className="border-2 h-8"
        value={filter ?? ""}
        onChange={onChange}
      />
    </>
  );
};
