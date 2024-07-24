import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useEffect } from "react";
import { getNews } from "@/requests/requests";
import {
  currentNewsSelector,
  setNews,
  updateComments,
} from "@/store/newsSlice";
import { useParams } from "react-router";
import { RouteParamsType } from "@/components/types";
import Comments from "@/components/Comments/Comments";
import {
  BoxContent,
  FirstText,
  ItemBox,
  LinkText,
  NewsBox,
  SecondSec,
  SecondText,
  TextContent,
  UpdateButton,
} from "@/components/style";
import Comment from "@/assets/comment.svg";
import Like from "@/assets/likes.svg";
import User from "@/assets/user.svg";
import dayjs from "dayjs";
import Loader from "@/components/Loader/Loader";
import Reload from "@/assets/reload.svg";

const NewsPage: FC = () => {
  const currentNews = useAppSelector(currentNewsSelector);
  const dispatch = useAppDispatch();
  const { id } = useParams<RouteParamsType>();

  const fetchData = () => {
    if (id) {
      getNews(+id).then((response) => {
        dispatch(setNews(response));
      });
    }
  };

  const fetchComments = () => {
    if (id) {
      getNews(+id).then((response) => {
        dispatch(updateComments(response.comments));
      });
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchComments, 60000);
    return () => {
      dispatch(setNews(null));
      clearInterval(id);
    };
  }, [dispatch, id]);

  return (
    <>
      {currentNews ? (
        <NewsBox>
          <FirstText>{currentNews.title}</FirstText>
          <LinkText to={`${currentNews.url}`}>{currentNews.url}</LinkText>
          <BoxContent>
            <img src={User} alt={"user"} width={50} height={50} />
            <TextContent>
              <FirstText>{currentNews.user}</FirstText>
              <SecondText>
                {dayjs(currentNews.time * 1000).format("DD.MM.YYYY в HH:mm")}
              </SecondText>
            </TextContent>
          </BoxContent>
          <div dangerouslySetInnerHTML={{ __html: currentNews.content }} />
          <SecondSec>
            <BoxContent>
              <ItemBox>
                <img src={Like} alt={"like"} width={20} height={20} />
                {currentNews.points}
              </ItemBox>
              <ItemBox>
                <img src={Comment} alt={"comment"} width={20} height={20} />
                {currentNews.comments_count}
              </ItemBox>
            </BoxContent>
            <UpdateButton onClick={fetchComments}>
              <img src={Reload} alt={"back"} width={20} height={20} />
            </UpdateButton>
          </SecondSec>
          {currentNews.comments.map((comment) => (
            <Comments {...comment} key={comment.id} />
          ))}
        </NewsBox>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default NewsPage;