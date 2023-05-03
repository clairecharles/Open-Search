import React from 'react'

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const Filter = ({
  title,
  isActive,
  onClick,
}: {
  title: string,
  isActive: boolean,
  onClick: React.MouseEventHandler,
}) => {
  return (
    <div
      className=''
      onClick={onClick}
      style={{ backgroundColor: `${isActive ? "lavender" : "white"}` }}
    >
      <div
        className={styles.circle}
        style={{
          borderColor: `${
            title === "draft"
              ? "gold"
              : title === "rejected"
              ? "tomato"
              : "limegreen"
          }`,
        }}
      ></div>
      <h3 className=''>{capitalize(title)}</h3>
    </div>
  );
};
