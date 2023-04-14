import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { authApi } from "../axios";
import { LoginPayload } from "../models";

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("api/users/me", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });
  const firstLoading = profile === undefined && error === undefined;
  async function login(values: LoginPayload) {
    await authApi.login({
      ...values,
    });
    //triiger revalidate
    await mutate();
  }
  async function logout() {
    //   await authApi.logout();
    mutate({}, false);
  }
  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
