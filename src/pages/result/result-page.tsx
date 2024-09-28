import * as S from "../style/style-page.style";
import * as Style from "./result-page.style";

import { Icon } from "@/components";
import { IResultProps } from "@/types/result";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import { Triangle, Rectangle, Round } from "@/assets/images/body-check";
import useGetUserInfo from "@/hooks/queries/auth/useGetUserInfo";
import { render } from "react-thermal-printer";
import Receipt from "@/components/receipt/receipt";
import useLogout from "@/hooks/queries/auth/useLogout";

const ResultPage = () => {
  const { state }: { state: IResultProps } = useLocation();
  const { data: userInfo } = useGetUserInfo();
  const { mutate: logout } = useLogout();

  const handleClick = async () => {
    if (userInfo && state) {
      const { chestSize, height, hipSize, shoulderSize, waistSize } =
        state.userBodySizeResponseDto;
      const data = await render(
        Receipt({
          bodyTypeName: state.bodyTypeName,
          nickname: userInfo.userName,
          chestSize: Math.round(chestSize),
          height: Math.round(height),
          hipSize: Math.round(hipSize),
          shoulderSize: Math.round(shoulderSize),
          waistSize: Math.round(waistSize),
        }),
      );

      if (navigator.serial) {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });

        const writer = port.writable?.getWriter();
        if (writer != null) {
          await writer.write(data);
          writer.releaseLock();
        }
      }
    }

    logout();
  };

  if (userInfo && state)
    return (
      <S.Container>
        <Icon blackNum={3} />
        <S.ContentResultContainer>
          <S.ResultBodyType>
            <img src={Rectangle} alt="icons" className="rectangle" />
            <S.ResultTitle>
              {userInfo.userName}님,
              <br />
              <span>{state.bodyTypeName}</span> 체형입니다.
            </S.ResultTitle>
            <S.UserBody>
              <S.ResultImg>
                <img src={state.objFile} />
              </S.ResultImg>
              <S.BodySizeWrapper>
                <h5>*신체치수</h5>
                <ul>
                  <li>
                    키(신장) : <b>{state.userBodySizeResponseDto.height}cm</b>
                  </li>
                  <li>
                    어깨 단면 :
                    <b>
                      {Math.round(state.userBodySizeResponseDto.shoulderSize)}
                      cm
                    </b>
                  </li>
                  <li>
                    가슴 둘레 :
                    <b>
                      {Math.round(state.userBodySizeResponseDto.chestSize)}cm
                    </b>
                  </li>
                  <li>
                    허리 둘레 :
                    <b>
                      {Math.round(state.userBodySizeResponseDto.waistSize)}cm
                    </b>
                  </li>
                  <li>
                    엉덩이 둘레 :
                    <b>{Math.round(state.userBodySizeResponseDto.hipSize)}cm</b>
                  </li>
                </ul>
              </S.BodySizeWrapper>
            </S.UserBody>
          </S.ResultBodyType>

          <S.ResultExplainWrapper>
            <S.ContentWrapper>
              <img src={Triangle} alt="icons" />
              <span>- 체형 특징</span>
              <p>{state.bodyTypeFeature}</p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <img src={Round} alt="icons" />
              <span>- 코디 주의사항</span>
              <p>{state.bodyTypeCareful}</p>
            </S.ContentWrapper>
          </S.ResultExplainWrapper>
          <Style.ClothWrapper>
            <section>
              <img
                src={state.userStylingResponseDto.userTopClothesDto.imageUrl}
              />

              <img
                src={
                  state.userStylingResponseDto.userBottomClothesItemsDto
                    .imageUrl
                }
              />
            </section>
            <Style.QRImg>
              <button onClick={handleClick}>영수증 출력</button>
              <QRCode size={114} value={`https://fitting-pair.vercel.app/`} />
              <p>모바일로 보기</p>
            </Style.QRImg>
          </Style.ClothWrapper>
        </S.ContentResultContainer>
      </S.Container>
    );
};

export default ResultPage;
