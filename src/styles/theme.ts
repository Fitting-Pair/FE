import { RESPONSIVE_SIZE } from "@/constants";

const COLOR = {
  ORANGE: "#FFC791",
  GREEN: "#7C9C80",
  GRAY: "#CFD1D0",
  DARK_GRAY: "#6D6B69",
  RED: "#F42121",
  WHITE: "#fff",
  BLACK: "#000",
};

const ALIGN = {
  ROW_CENTER: `
        display: flex;
        justify-content: center;
        align-items: center
        `,
  COLUMN_CENTER: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `,
  ROW_SPACE_BETWEEN: `
      display: flex;
      justify-content: space-between;
      align-items: center;
      `,
};

const FONT = {
  INTER_REGULAR: "Inter-Regular",
  INTER_MEDIUM: "Inter-Medium",
  INTER_BOLD: "Inter-Bold",
  JIMHURIA_REGULAR: "Jomhuria-Regular",
  PRAISE_REGULAR: "Praise-Regular",
  ROBOTO_REGULAR: "Roboto-Regular",
  ROBOTO_MEDIUM: "Roboto-Medium",
  ROBOTO_BOLD: "Roboto-Bold",
};

const WINDOW_SIZE = {
  MOBILE: `screen and (max-width: ${RESPONSIVE_SIZE.MOBILE})`,
  TABLET: `screen and (max-width: ${RESPONSIVE_SIZE.TABLET})`,
  IPAD_PRO: `screen and (max-width: ${RESPONSIVE_SIZE.IPAD_PRO})`,
};

const theme = { COLOR, ALIGN, FONT, WINDOW_SIZE };

export default theme;
