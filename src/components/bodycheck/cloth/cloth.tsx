import * as S from "./cloth.style";

import { TCloth } from "@/types/cloth";

const ClothComponent = ({ cloth }: { cloth: TCloth }) => {
  const { imageUrl } = cloth;
  return (
    <S.Wrap>
      <img src={imageUrl} />
    </S.Wrap>
  );
};

export default ClothComponent;
