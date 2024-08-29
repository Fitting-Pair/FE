import * as S from "./mobile-icon.style";

import { FaArrowLeft } from "react-icons/fa6";
import LogOut from "@/assets/images/door.png";
import { useNavigate, useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa6";
import { PAGE_PATH } from "@/constants";
import useLogout from "@/hooks/queries/auth/useLogout";

interface IMoblieIconProps {
  text?: string;
  noBack?: boolean;
}

const MoblieIcon = ({ text, noBack }: IMoblieIconProps) => {
  const { id } = useParams();
  const nav = useNavigate();
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };

  const handleModify = () => {
    nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.MODIFY}/${id}`);
  };

  return (
    <S.Container>
      {noBack ? (
        <FaPen onClick={handleModify} />
      ) : (
        <FaArrowLeft onClick={() => nav(-1)} />
      )}
      <div>{text}</div>
      <img src={LogOut} onClick={handleLogout} />
    </S.Container>
  );
};

export default MoblieIcon;
