import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Page() {
  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLongitude] = useState<string>();
  const [dimension, setDimension] = useState<string>();
  const [date, setDate] = useState<string>("");

  const router = useRouter();

  function searchEarth(e: FormEvent) {
    e.preventDefault();
    if (latitude != "" && longitude != "" && dimension != "" && date != "") {
      router.push(
        `/earth//search?latitude=${latitude}&longitude=${longitude}&dimension=${dimension}&date=${date}`
      );
    } else {
      alert("Error searching");
    }
  }

  return (
    <>
      <section className="h-[50rem] gap-4 flex-col w-full flex items-center justify-center ">
        <h1 className="text-4xl font-bold">Search the earth</h1>
        <form
          onSubmit={(e) => searchEarth(e)}
          className="flex flex-col items-center justify-center w-3/4 gap-5 h-3/4"
        >
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">Latitude:</span>
            </label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              required
              placeholder="ex. 38.1234"
              className="w-full max-w-xs input input-bordered"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">Longitude:</span>
            </label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              required
              placeholder="ex. -38.1234"
              className="w-full max-w-xs input input-bordered"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>

          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">Dimension in degrees:</span>
            </label>
            <input
              pattern="^(0(\.\d+)?|1(\.0+)?)$"
              type="number"
              id="dimension"
              name="dimension"
              step="0.01"
              required
              min="0"
              max="1"
              placeholder="ex. 0.25"
              className="w-full max-w-xs input input-bordered"
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
            />
          </div>

          <div className="w-full max-w-xs form-control">
            <label className="label">
              <span className="label-text">Date:</span>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              required
              className="w-full max-w-xs input input-bordered"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>
    </>
  );
}
