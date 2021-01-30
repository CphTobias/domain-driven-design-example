import React from "react";

function Todos({ children, ...props }) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
}

export { Todos };
