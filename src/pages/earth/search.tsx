/*


*/

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { latitude, longitude, dimension, date } = router.query;
  return <>{dimension}</>;
}
