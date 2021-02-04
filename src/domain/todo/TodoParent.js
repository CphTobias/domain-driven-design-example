import React from "react";

function TodoParent({ children, placeholder, buttonStyle }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { placeholder, buttonStyle });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
}

export { TodoParent };
