import { AxiosResponse } from "axios";

interface IClothInfo {
  name: string;
  brand: string;
  imageUrl: string;
  siteUrl: string;
  clothesCategory?: string;
}

interface CustomResponse<T> extends AxiosResponse {
  message: string;
  data: T;
}

interface IBodySize {
  resultId: number;
  objFile: string;
  bodyTypeName: string;
  bodyTypeFeature: string;
  bodyTypeCareful: string;
  userBodySizeResponseDto: {
    chestSize: number;
    height: number;
    hipSize: number;
    shoulderSize: number;
    waistSize: number;
  };
}

/* 전체 결과지 */
interface IResultProps extends IBodySize {
  localDate: string;
  userStylingResponseDto: {
    userTopClothesDto: IClothInfo;
    userBottomClothesItemsDto: IClothInfo;
  };
}

interface IMypageResults {
  userStylingResultResponseDtos: IResultProps[];
}

interface IBodyCheckResults extends IBodySize {
  clothesDto: {
    topClothesItems: IClothInfo[];
    bottomClothesItems: IClothInfo[];
  };
}

interface ISelectCloth {
  topName: string;
  bottomName: string;
}

export type {
  IResultProps,
  IBodyCheckResults,
  ISelectCloth,
  CustomResponse,
  IMypageResults,
  IClothInfo,
};
