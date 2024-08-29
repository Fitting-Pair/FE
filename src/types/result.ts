type TResultProps = {
  id: number;
  objFile: string;
  bodyTypeName: string;
  bodyTypeFeature: string;
  bodyTypeCareful: string;
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

export type { TResultProps };
