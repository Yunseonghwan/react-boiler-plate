import { useQuery } from "react-query";
import { loginApi } from "../services";

export const useLogin = (form: string) =>
  useQuery({
    queryKey: ["userLogin"],
    queryFn: () => loginApi(form),
  });
