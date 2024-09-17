import * as S from "./mobile-icon.style";

import { FaArrowLeft } from "react-icons/fa6";
import LogOut from "@/assets/images/door.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { PAGE_PATH } from "@/constants";
import useLogout from "@/hooks/queries/auth/useLogout";

interface IMobileIconProps {
  text?: string;
  noBack?: boolean;
}

const MobileIcon = ({ text, noBack }: IMobileIconProps) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const nav = useNavigate();
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };

  const handleModify = () => {
    nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.MODIFY}/${id}`);
  };

  const handleBack = () => {
    if (pathname.includes(`${PAGE_PATH.MODIFY}`)) {
      nav(`${PAGE_PATH.MY_PAGE}/${id}`);
    } else {
      nav(-1);
    }
  };

  return (
    <S.Container>
      {noBack ? (
        <FaPen onClick={handleModify} />
      ) : (
        <FaArrowLeft onClick={handleBack} />
      )}
      <div>{text}</div>
      <img src={LogOut} onClick={handleLogout} />
    </S.Container>
  );
};

export default MobileIcon;
