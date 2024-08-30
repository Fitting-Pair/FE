import * as S from "./result-page.style";

import { Icon } from "@/components";
import { useState } from "react";

const ResultPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <S.Container>
      <Icon blackNum={3} />
      <S.ContentResultContainer>
        <S.ResultWrapper>
          <S.ResultTitle>
            YOU ARE <span>SQUARE</span> BODY.
          </S.ResultTitle>
          <S.ResultImg>{/* <img src={resultImg} /> */}</S.ResultImg>
          <S.ResultExplainWrapper>
            <S.ContentWrapper>
              <span>FEATURES</span>
              <p>
                consectetur. Vestibulum sit facilisis purus orci commodo ornare.
                Donec fermentum urna sit sed est cras faucibus in et. Eget
                habitasse vitae in in dictum viverra velit. Lorem morbi massa
                neque massa adipiscing pharetra facilisi sagittis viverra.
                Aliquam nec volutpat nulla aenean. Sed sollicitudin odio felis
                imperdiet faucibus quis mattis porttitor. Duis vehicula aliquet
                dui nulla sagittis potenti purus dignissim. Lacus dictum eget
                pellentesque quis nunc lectus. Dignissim amet ultricies velit
                etiam aenean.
              </p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <span>FEATURES</span>
              <p>
                consectetur. Vestibulum sit facilisis purus orci commodo ornare.
                Donec fermentum urna sit sed est cras faucibus in et. Eget
                habitasse vitae in in dictum viverra velit. Lorem morbi massa
                neque massa adipiscing pharetra facilisi sagittis viverra.
                Aliquam nec volutpat nulla aenean. Sed sollicitudin odio felis
                imperdiet faucibus quis mattis porttitor. Duis vehicula aliquet
                dui nulla sagittis potenti purus dignissim. Lacus dictum eget
                pellentesque quis nunc lectus. Dignissim amet ultricies velit
                etiam aenean.
              </p>
            </S.ContentWrapper>
          </S.ResultExplainWrapper>
          <S.ClothWrapper>
            <span>SELECTED APPAREL</span>
            <section>
              {/* <div>
                <img src={topImg} />
              </div>
              <div>
                <img src={topImg} />
              </div> */}
            </section>
          </S.ClothWrapper>
          {/* <S.Button onClick={openModal}>Store</S.Button> */}
          <S.QRImg></S.QRImg>
          {/* <Modal isVisible={isModalVisible} onClose={closeModal} /> */}
        </S.ResultWrapper>
      </S.ContentResultContainer>
    </S.Container>
  );
};

export default ResultPage;
