import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function useEventSource(url) {
  const [data, setData] = useState(null);
  const sourceRef = useRef(null);
  useEffect(() => {
    if (!sourceRef.current) {
      sourceRef.current = new EventSource(url, { withCredentials: true });

      sourceRef.current.onmessage = (event) => {
        setData(JSON.parse(event.data));
      };
      sourceRef.current.onerror = (event) => {
        if (event.target.readyState === EventSource.CLOSED) {
          alert("SSE closed (" + event.target.readyState + ")");
        }

        sourceRef.current.close();
      };

      sourceRef.current.onopen = () => {
        // alert("connection opened");
      };
    }
    return () => {
      sourceRef.current.close();
    };
  }, [sourceRef.current]);

  return data;
}

export default useEventSource;
