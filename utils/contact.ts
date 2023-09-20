import axios from "axios";
export async function sendMessage(data: {
  name: string | undefined;
  message: string | undefined;
}) {
  return await axios
    .post("/api/contact", data)
    .then((res) => res.data)
    .catch((err) => err);
}
