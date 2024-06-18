import { FakeItem } from "@/models/fake-item";
import { ListResponse } from "@/models/list-response";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetFakeItems() {
  return useQuery<ListResponse<FakeItem>>({
    queryKey: ["fakeItems"],
    queryFn: () =>
      axios
        .get("https://fakerapi.it/api/v1/images?_width=380")
        .then((r) => r.data),
  });
}
