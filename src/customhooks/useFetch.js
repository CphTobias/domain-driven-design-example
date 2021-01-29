import React from "react";

async function fetchRandomData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function useFetch(url) {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    const data = fetchRandomData(url);
    if (data) {
      setState(data);
    }
  }, [url, setState]);

  return state;
}

export { useFetch };
