import { AxiosResponse } from "axios";
import { customApi, customApiForm } from "./index";
import * as Interfaces from "interface/crewInterface";

// 크루 생성
export async function getCrewCreate(
  accessToken: string,
  formData: FormData,
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
  const api = customApiForm("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.post("", formData).then(success).catch(fail);
}

// 크루 리스트 조회
export async function getCrewList(
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get("").then(success).catch(fail);
}

// 크루 상세 조회
export async function getCrewDetail(
  accessToken: string,
  crewId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get(`/${crewId}`).then(success).catch(fail);
}

// 크루원 조회(크루원)
export async function getCrewMember(
  accessToken: string,
  crewId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get(`/member/${crewId}`).then(success).catch(fail);
}

// 크루원 조회(크루장)
export async function getCrewMaster(
  accessToken: string,
  crewId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get(`/master-member/${crewId}`).then(success).catch(fail);
}

// 크루 가입 요청
export async function getCrewRegister(
  accessToken: string,
  crewId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.post(`/join/${crewId}`).then(success).catch(fail);
}

// 크루 가입 대기 조회
export async function getCrewWait(
  accessToken: string,
  crewId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get(`/join/${crewId}`).then(success).catch(fail);
}

// 크루 가입 승인
export async function getCrewAllow(
  accessToken: string,
  data: Interfaces.CrewAllowInterface,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.patch(`/approve`, data).then(success).catch(fail);
}

// 크루 공지사항
export async function getNotice(
  accessToken: string,
  data: Interfaces.NoticeInterface,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.patch(`/notice`, data).then(success).catch(fail);
}

// 크루 검색
export async function getCrewSearch(
  accessToken: string,
  type: number,
  word: string,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get(`/search/${type}/${word}`).then(success).catch(fail);
}

// 크루 탈퇴
export async function getCrewQuit(
  accessToken: string,
  crewId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.delete(`/quit/${crewId}`).then(success).catch(fail);
}

// 크루 강퇴
export async function getCrewKickOut(
  accessToken: string,
  crewId: number,
  memberId: number,
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
  const api = customApi("/plonit-service/v1/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.delete(`/kick-out/${crewId}/${memberId}`).then(success).catch(fail);
}

// 크루 리스트 조회
export async function getMyCrewList(
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
  const api = customApi("/plonit-service/v1/members/crew");
  api.defaults.headers["accessToken"] = `Bearer ${accessToken}`;
  await api.get("").then(success).catch(fail);
}
