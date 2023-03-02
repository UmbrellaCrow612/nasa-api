/* eslint-disable @next/next/no-img-element */
import useApod from "@/hooks/useApod";
import Link from "next/link";

export default function Page() {
  const { apodData, isError, isLoading } = useApod();
  return (
    <>
      {/* Image view*/}
      <section className="h-[35rem] md:h-[45rem] relative">
        <div className="w-3/4 h-3/4 md:h-1/2 md:w-1/2 mx-auto absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <p className="animate-bounce">Loading image ...</p>
            </div>
          ) : (
            <>
              {apodData?.media_type === "image" && (
                <>
                  {" "}
                  <Link href={apodData?.hdurl || "/"}>
                    <img
                      src={apodData?.hdurl || apodData?.url}
                      alt={apodData?.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                </>
              )}

              {apodData?.media_type === "video" && (
                <video
                  src={apodData.url}
                  controls
                  className="w-full h-full aspect-video"
                >
                  Not supported
                </video>
              )}
            </>
          )}
          {isError && <p>Error occurred</p>}
        </div>
      </section>

      {/* Image Information */}
      {isLoading ? (
        <div className="h-[20rem] flex items-center justify-center">
          <p>Loading info</p>
        </div>
      ) : (
        <>
          <section className="py-10 px-4 space-y-10">
            <div className="flex flex-row flex-wrap items-center gap-3">
              <h2 className="font-bold text-xl">Title:</h2>{" "}
              <p className="text-base">{apodData?.title}</p>
            </div>

            <div className="flex flex-row flex-wrap items-center gap-3">
              <h2 className="font-bold text-xl">Explanation:</h2>{" "}
              <p className="text-base">{apodData?.explanation}</p>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-bold text-xl">Image Date:</h2>{" "}
              <p className="text-base">{JSON.stringify(apodData?.date)}</p>
            </div>
            {apodData?.copyright && (
              <>
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-xl">Copyright:</h2>{" "}
                  <p className="text-base">{apodData?.copyright}</p>
                </div>
              </>
            )}

            <div className="flex flex-row flex-wrap items-center gap-3">
              <h2 className="font-bold text-xl">Media type:</h2>{" "}
              <p className="text-base">{apodData?.media_type}</p>
            </div>

            <div className="flex flex-row flex-wrap items-center gap-3">
              <h2 className="font-bold text-xl">Service version:</h2>{" "}
              <p className="text-base">{apodData?.service_version}</p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
