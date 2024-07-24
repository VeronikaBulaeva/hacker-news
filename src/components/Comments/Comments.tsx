import { FC, useState } from "react";
import { FeedDataType } from "@/components/types";
import {
  BoxContent,
  CommentBox,
  CommentButton,
  SecondText,
  TextContent,
  UserText,
} from "@/components/style";
import User from "@/assets/user.svg";
import Loader from "@/components/Loader/Loader";

const Comments: FC<FeedDataType> = ({
  content,
  comments,
  user,
  time_ago,
  deleted,
  dead,
}) => {
  const [isShown, setIsShown] = useState(false);

  const changeVisibility = () => {
    setIsShown(!isShown);
  };

  if (deleted || dead) {
    return null;
  }

  return (
    <>
      {comments ? (
        <CommentBox>
          <BoxContent>
            <img src={User} alt={"user"} width={40} height={40} />
            <TextContent>
              <UserText>{user}</UserText>
              <SecondText>{time_ago}</SecondText>
            </TextContent>
          </BoxContent>

          <div dangerouslySetInnerHTML={{ __html: content }} />
          {comments.length !== 0 ? (
            <CommentButton onClick={changeVisibility}>
              {isShown ? "Скрыть ответы" : "Показать ответы"}
            </CommentButton>
          ) : null}
          {isShown &&
            comments.map((comment) => (
              <Comments {...comment} key={comment.id} />
            ))}
        </CommentBox>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Comments;