import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export const ExploradorSidebar = () => {
  const tipos = [
    { value: "manga", label: "Manga" },
    { value: "anime", label: "Anime" },
  ];

  const selectStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#3b434" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected ? "blue" : "black",
        backgroundColor: "black",
      };
    },
  };

  return (
    <div>
      <h5> Tipo </h5>
      <div className="filter-group">
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[tipos[0], tipos[1]]}
          isMulti
          options={tipos}
          styles={selectStyles}
        />
      </div>
    </div>
  );
};
