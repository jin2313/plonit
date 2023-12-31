import { AxiosResponse } from "axios";
import { customApi } from "./index";
import * as Interfaces from "interface/authInterface";

export async function login(
  code: string,
  success: (
    res: AxiosResponse<any, any>,
  ) =>
    | AxiosResponse<any, any>
    | PromiseLike<AxiosResponse<any, any>>
    | null
    | undefined
    | void,
  fail: (err: any) => PromiseLike<never> | null | undefined | void,
) {
  await customApi("/plonit-service/auth")
    .get(`/kakao/login/${code}`)
    .then(success)
    .catch(fail);
}
// export async function login(
//   code: string,
//   token: string,
//   success: (
//     res: AxiosResponse<any, any>,
//   ) =>
//     | AxiosResponse<any, any>
//     | PromiseLike<AxiosResponse<any, any>>
//     | undefined
//     | void,
//   fail: (err: any) => PromiseLike<never> | null | undefined | void,
// ) {
//   await customLoginApi("/plonit-service/auth", token)
//     .get(`/kakao/login/${code}`)
//     .then(success)
//     .catch(fail);
// }

export async function nicknameCheck(
  nickname: string,
  success: (
    res: AxiosResponse<any, any>,
  ) =>
    | AxiosResponse<any, any>
    | PromiseLike<AxiosResponse<any, any>>
    | null
    | undefined
    | void,
  fail: (err: any) => PromiseLike<never> | null | undefined | void,
) {
  await customApi("/plonit-service/auth")
    .get(`/check-nickname/${nickname}`)
    .then(success)
    .catch(fail);
}

export async function logout(
  accessToken: string,
  success: (
    res: AxiosResponse<any, any>,
  ) =>
    | AxiosResponse<any, any>
    | PromiseLike<AxiosResponse<any, any>>
    | null
    | undefined
    | void,
  fail: (err: any) => PromiseLike<never> | null | undefined | void,
) {
  const api = customApi("/plonit-service/auth");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.post(`/kakao/logout`).then(success).catch(fail);
}

export async function alarm(
  accessToken: string,
  data: any,
  success: (
    res: AxiosResponse<any, any>,
  ) =>
    | AxiosResponse<any, any>
    | PromiseLike<AxiosResponse<any, any>>
    | null
    | undefined
    | void,
  fail: (err: any) => PromiseLike<never> | null | undefined | void,
) {
  const api = customApi("/plonit-service/auth");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.post("/fcm", data).then(success).catch(fail);
}
