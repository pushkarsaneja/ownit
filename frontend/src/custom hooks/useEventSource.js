import { useState } from "react";
import { useEffect } from "react";

function useEventSource(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = new EventSource(url, { withCredentials: true });

    source.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    source.onerror = (event) => {
      if (event.target.readyState === EventSource.CLOSED) {
        alert("SSE closed (" + event.target.readyState + ")");
      }

      source.close();
    };

    source.onopen = () => {
      // alert("connection opened");
    };

    return () => {
      source.close();
    };
  }, []);

  return data;
}

export default useEventSource;
