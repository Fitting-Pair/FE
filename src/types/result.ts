import { TCloth } from "./cloth";

/* 전체 결과지 */
type TResultProps = {
  resultId: number;
  objFile: string;
  bodyTypeName: string;
  bodyTypeFeature: string;
  bodyTypeCareful: string;
  localDate: string;
  userBodySizeResponseDto: {
    chestSize: number;
    height: number;
    hipSize: number;
    shoulderSize: number;
    waistSize: number;
  };
  userStylingResponseDto: {
    userTopClothesDto: {
      name: string;
      brand: string;
      imageUrl: string;
      siteUrl: string;
    };
    userBottomClothesItemsDto: {
      name: string;
      brand: string;
      imageUrl: string;
      siteUrl: string;
    };
  };
};

type TResult = {
  code: number;
  message: string;
  data: {
    userStylingResultResponseDtos: TResultProps[];
  };
};

type TFirstResult = {
  code: number;
  message: string;
  data: TData;
};

type TData = {
  resultId: number;
  objFile: string;
  bodyTypeName: string;
  bodyTypeFeature: string;
  bodyTypeCareful: string;
  clothesDto: {
    topClothesItems: TCloth[];
    bottomClothesItems: TCloth[];
  };
};

type TSelectCloth = {
  topName: string;
  bottomName: string;
};

export type { TResultProps, TResult, TFirstResult, TData, TSelectCloth };
