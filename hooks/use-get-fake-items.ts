import { getFakeItems } from "@/components/apis/fake-items";
import { FakeItem } from "@/models/fake-item";
import { ListResponse } from "@/models/list-response";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  initialData?: ListResponse<FakeItem>;
}

export default function useGetFakeItems({ initialData }: Props) {
  return useQuery<ListResponse<FakeItem>>({
    queryKey: ["fakeItems"],
    queryFn: getFakeItems,
    initialData,
  });
}
