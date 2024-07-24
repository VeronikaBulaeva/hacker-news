import { FC } from "react";
import {
  FirstText,
  HeaderButton,
  HeaderLink,
  HeaderSec,
} from "@/components/style";
import Back from "@/assets/back.svg";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderSec>
        <HeaderLink to={`/newsList/1`}>
          <FirstText>Hacker News</FirstText>
        </HeaderLink>
        <HeaderButton onClick={() => navigate(-1)}>
          <img src={Back} alt={"back"} width={30} height={30} />
          <FirstText>Назад</FirstText>
        </HeaderButton>
      </HeaderSec>
    </>
  );
};

export default Header;