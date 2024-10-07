import { useEffect, useState } from "react";
import CodingNotes from "../../components/CodingNote/CodingNote";

type ResponseState = {
  responseJSON: null | string;
  isLoading: boolean;
  error: null | unknown;
};

function useFetch(url: string) {
  const [output, setOutput] = useState<ResponseState>({
    responseJSON: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    let isUnmounted = false;

    console.log(url);

    const fetchIt = async () => {
      if (!url) return;
      try {
        const response = await fetch(url);
        if (isUnmounted) return;
        const newJSON = await response.json();
        setOutput({
          isLoading: false,
          responseJSON: newJSON,
          error: null,
        });
      } catch (error) {
        if (isUnmounted) return;
        setOutput({
          isLoading: false,
          responseJSON: null,
          error: error,
        });
      }
    };

    fetchIt();

    setOutput({
      responseJSON: null,
      isLoading: true,
      error: null,
    });

    console.log("returning cleanup callback");
    return () => {
      isUnmounted = true;
    };
  }, [url]);

  return output;
}

const Example = () => {
  const [url, setUrl] = useState("https://catfact.ninja/fact");
  const response = useFetch(url);
  return (
    <>
      <button onClick={() => setUrl("https://catfact.ninja/fact")}>
        Cat facts
      </button>
      <button
        onClick={() =>
          setUrl("https://api.coindesk.com/v1/bpi/currentprice.json")
        }
      >
        Coin desk
      </button>
      <button onClick={() => setUrl("https://api.genderize.io/?name=luc")}>
        Gender prediction
      </button>
      <code> {JSON.stringify({ url, response }, null, 2)}</code>
    </>
  );
};

const FetchHook = () => {
  return (
    <>
      <h1>Fetch Hook Example</h1>
      <Example />;
    </>
  );
};

export default FetchHook;
