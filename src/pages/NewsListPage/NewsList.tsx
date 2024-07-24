import { FC, useCallback, useEffect } from "react";
import { getAllNews } from "@/requests/requests";
import { useAppDispatch } from "@/store/hooks";
import { setNewsList } from "@/store/newsSlice";
import List from "@/components/NewsList/List/List";
import { useNavigate, useParams } from "react-router";
import { RouteParamsType } from "@/components/types";
import { MainSec, UpdateButton } from "@/components/style";
import Reload from "@/assets/reload.svg";
import { ERROR_PAGE } from "@/constants/routes";

const NewsList: FC = () => {
  const dispatch = useAppDispatch();
  const { id = 1 } = useParams<RouteParamsType>();
  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    if (id) {
      getAllNews(+id).then((response) => {
        if (response) {
          dispatch(setNewsList(response));
        } else {
          navigate(ERROR_PAGE);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 60000);
    return () => {
      clearInterval(id);
    };
  }, [fetchData, id]);

  return (
    <MainSec>
      <UpdateButton onClick={fetchData}>
        <img src={Reload} alt={"back"} width={20} height={20} />
      </UpdateButton>
      <List />
    </MainSec>
  );
};

export default NewsList;