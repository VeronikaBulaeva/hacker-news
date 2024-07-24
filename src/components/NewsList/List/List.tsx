import { FC } from "react";
import { useAppSelector } from "@/store/hooks";
import { newsListSelector } from "@/store/newsSlice";
import { GridSec, LinkButton, PageNumberBox } from "@/components/style";
import NewsItem from "@/components/NewsList/NewsItem/NewsItem";
import Loader from "@/components/Loader/Loader";
import { useParams } from "react-router";
import { RouteParamsType } from "@/components/types";

const List: FC = () => {
  const newsList = useAppSelector(newsListSelector);
  const { id = 1 } = useParams<RouteParamsType>();

  return (
    <>
      {newsList.length ? (
        <>
          <GridSec>
            {newsList.map((news) => (
              <NewsItem
                id={news.id}
                title={news.title}
                points={news.points}
                user={news.user}
                time_ago={news.time_ago}
                comments_count={news.comments_count}
                key={news.id}
              />
            ))}
          </GridSec>
          <PageNumberBox>
            {Array(4)
              .fill("")
              .map((_, index) => (
                <LinkButton
                  style={
                    +id === index + 1
                      ? { backgroundColor: "#f0f0f0" }
                      : undefined
                  }
                  to={`/newsList/${index + 1}`}
                  key={index}
                >
                  {index + 1}
                </LinkButton>
              ))}
          </PageNumberBox>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default List;