/* eslint-disable @next/next/no-img-element */
import useApod from "@/hooks/useApod";
import Link from "next/link";

export default function Page() {
  const { apodData, isError, isLoading } = useApod();
  return (
    <section className="h-[35rem] md:h-[45rem] relative">
      {/* Image */}
      <div className="w-3/4 h-3/4 md:h-1/2 md:w-1/2 mx-auto absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <p className="animate-bounce">Loading image might...</p>
          </div>
        ) : (
          <Link href={apodData?.hdurl || "/"}>
            <img
              src={apodData?.hdurl || apodData?.url}
              alt={apodData?.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Link>
        )}
        {isError && <p>Error occurred</p>}
      </div>
    </section>
  );
}
