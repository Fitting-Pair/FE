import * as S from "../cloth.style";

import { IClothInfo, ISelectCloth } from "@/types/result";

interface IClothProps {
  apparel: IClothInfo;
  setCloth: (cloth: ISelectCloth) => void;
  cloth: ISelectCloth;
}

const TopComponent = ({ apparel, setCloth, cloth }: IClothProps) => {
  const { imageUrl, name } = apparel;

  const handleClick = () => {
    setCloth({ ...cloth, topName: name });
  };

  return (
    <S.Wrap onClick={handleClick} $isSelected={cloth.topName === name}>
      <img src={imageUrl} />
    </S.Wrap>
  );
};

export default TopComponent;
