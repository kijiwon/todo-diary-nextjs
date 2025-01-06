import { createServerSideClientRSC } from "@/app/utils/server";
import "../../../globals.css";
import { getPlaceLike } from "@/app/actions/place-like/place-like-actions";
import PlaceHeader from "./PlaceHeader";
import PlaceLists from "./PlaceLists";
import { TypePlaceLike } from "@/types/PlaceLike";

export default async function Page() {
  const supabase = await createServerSideClientRSC();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await getPlaceLike(user?.id as string);
  const placeLike = Array.isArray(data?.["place-like"])
    ? (data["place-like"] as TypePlaceLike[])
    : [];

  return (
    <div className=" mt-[20px]">
      <PlaceHeader />
      <PlaceLists placeLike={placeLike} />
    </div>
  );
}
