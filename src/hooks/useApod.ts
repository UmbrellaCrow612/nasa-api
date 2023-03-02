import useSWR from "swr";

interface Apod {
  copyright: string;
  date: Date;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const useApod = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<Apod>(
    `https://api.nasa.gov/planetary/apod?api_key=cLD6sKf3Y8cFzRqLGDOiMI2tjqxECmnZcytAwapv`,
    fetcher
  );
  return {
    apodData: data,
    isLoading: isLoading,
    isError: error,
  };
};

export default useApod;

// =wCGvM8cmlHpDdaM7ahbE6pvxO5WWfsA1Brqt2OgT
