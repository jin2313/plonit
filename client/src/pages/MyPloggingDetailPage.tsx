import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import style from "styles/css/MyPloggingDetailPage.module.css";
import { BackTopBar } from "components/common/TopBar";
import { searchPloggingInfo } from "api/lib/plogging";
import { PloggingLog } from "interface/ploggingInterface";
import DefaultPathMap from "components/plogging/DefaultPathMap";

const formatMinutes = (minutes: any) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${("0" + hours).slice(-2)}:${("0" + remainingMinutes).slice(-2)}`;
};

const formattedDate = (date: any) => {
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

const MyPloggingDetailPage = () => {
  const accessToken = useSelector((state: any) => state.user.auth.accessToken);
  const User = useSelector((state: any) => state.user.info);
  const { ploggingId } = useParams();
  const [isPloggingDetail, setPloggingDetail] = useState<PloggingLog>();
  const year = isPloggingDetail?.startTime?.slice(0, 4);
  const month = isPloggingDetail?.startTime?.slice(5, 7);
  const day = isPloggingDetail?.startTime?.slice(8, 10);

  // console.log(isPloggingDetail);

  useEffect(() => {
    searchPloggingInfo({
      accessToken: accessToken,
      plogging_id: Number(ploggingId),
      success: (res) => {
        // console.log("플로깅 상세 조회 성공");
        // console.log(res.data);
        setPloggingDetail(res.data.resultBody);
      },
      fail: (error) => {
        console.error("플로깅 상세 조회 실패", error);
      },
    });
  }, []);

  return (
    <div>
      <BackTopBar text="나의 플로깅" />
      <div className={style.myplogging_detail}>
        <div className={style.date_area}>
          <div>{year}년</div>
          <div>
            {month}월 {day}일의 기록
          </div>
        </div>
        <div className={style.profile}>
          <img src={User.profileImage} alt="프로필" />
          <div className={style.text}>
            <div className={style.nickname}>
              <span className={style.large}>{User.nickname}</span> 님
            </div>
            <div>
              {isPloggingDetail?.startTime !== undefined && (
                <>
                  {formattedDate(new Date(isPloggingDetail.startTime))}{" "}
                  {isPloggingDetail.place}
                </>
              )}
            </div>
          </div>
        </div>
        <div className={style.myrecord}>
          <div className={style.dist}>
            <div>총 거리</div>
            <div className={style.record_large}>
              {isPloggingDetail?.distance}
            </div>
          </div>
          <div className={style.time}>
            <div>총 시간</div>
            <div className={style.record_large}>
              {formatMinutes(isPloggingDetail?.totalTime)}
            </div>
          </div>
          <div className={style.calorie}>
            <div>칼로리</div>
            <div className={style.record_large}>
              {isPloggingDetail?.calorie}
            </div>
          </div>
        </div>
        <div className={style.content}>{isPloggingDetail?.review}</div>
        <div>
          {isPloggingDetail?.coordinates !== undefined && (
            <DefaultPathMap
              paths={isPloggingDetail.coordinates}
              subHeight={0}
            />
          )}
        </div>
        <div className={style.img_area}>
          {isPloggingDetail?.images.map((image: string, index: number) => (
            <img key={index} src={image} alt="이미지" />
          ))}
        </div>
      </div>
      <div style={{ height: "4rem" }}></div>
    </div>
  );
};

export default MyPloggingDetailPage;
