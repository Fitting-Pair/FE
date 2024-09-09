import ModalPortal from "@/components/common/portal/portal";
import * as S from "./modal.style";
import { CHECK, WARN } from "@/assets/images/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteUser from "@/hooks/queries/auth/useDeleteUser";

interface ModalProps {
  setOpen: (open: boolean) => void;
}

const Modal = ({ setOpen }: ModalProps) => {
  const nav = useNavigate();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { mutate } = useDeleteUser();

  const handleDelete = () => {
    mutate();
    setIsDeleting(true);
  };

  let content;

  if (isDeleting) {
    content = (
      <>
        <S.ImgBox>
          <img src={CHECK} alt="check img" />
        </S.ImgBox>
        <S.Text>
          회원 탈퇴에 성공하였습니다.
          <br /> 감사합니다.
        </S.Text>
        <S.BtnBox onClick={() => nav("/")}>홈으로 돌아가기</S.BtnBox>
      </>
    );
  } else {
    content = (
      <>
        <S.ImgBox>
          <img src={WARN} alt="warn img" />
        </S.ImgBox>
        <S.Text>
          정말 회원 탈퇴를 진행하시겠습니까?
          <br /> 이후에는 되돌릴 수 없습니다.
        </S.Text>
        <S.BtnBox onClick={handleDelete}>탈퇴하기</S.BtnBox>
      </>
    );
  }

  return (
    <ModalPortal>
      <S.Container>
        <S.ModalWrapper>
          {!isDeleting && <S.Cancel onClick={() => setOpen(false)}>X</S.Cancel>}
          {content}
        </S.ModalWrapper>
      </S.Container>
    </ModalPortal>
  );
};

export default Modal;
