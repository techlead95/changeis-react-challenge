import axios from "axios";

export const getFakeItems = () =>
  axios.get("https://fakerapi.it/api/v1/images?_width=380").then((r) => r.data);
