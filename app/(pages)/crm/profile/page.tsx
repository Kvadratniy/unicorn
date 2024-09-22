import BasePage from "@/app/ui/BasePage";
import CreateProfileButton from "./ui/CreateProfileButton";
import { getProfiles } from "@/app/actions/profileActions";
import ProfileListItem from "./ui/ProfileListItem";

export default async function Profile({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const profiles = await getProfiles({
    page,
    pageSize: 2,
    search,
  });

  return (
    <BasePage title="Профили клиентов" action={<CreateProfileButton />}>
      <div className="flex flex-col gap-2">
        {
          profiles.items.map((item) => {
            return (<ProfileListItem key={item.id} item={item}/>)
          })
        }
      </div>
    </BasePage>
  );
}
