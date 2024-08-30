import * as S from "../cloth.style";

import { TCloth } from "@/types/cloth";
import { TSelectCloth } from "@/types/result";

interface IClothProps {
  appearl: TCloth;
  setCloth: (cloth: TSelectCloth) => void;
  cloth: TSelectCloth;
}

const TopComponent = ({ appearl, setCloth, cloth }: IClothProps) => {
  const { imageUrl, name } = appearl;

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
