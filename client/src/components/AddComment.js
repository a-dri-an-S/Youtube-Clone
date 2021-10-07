import React from "react";
import defaultAvatar from "../assets/default-avatar.png";
import { useAuth } from "../context/auth-context";
import Wrapper from "../styles/CommentList";
import CommentList from "./CommentList";

function AddComment({ video }) {
  const user = useAuth();
  return (
    <Wrapper>
      <h3>{video.comments.length} comments</h3>

      <div className="add-comment">
        { user ?  (
          <img src={user.avatar} alt={user.username} />
        ) : (
          <img src={defaultAvatar} alt="default user" />
        )}
        <textarea placeholder="Add a public comment..." value="" rows={1} />
      </div>

      <CommentList comments={video.comments}/>
    </Wrapper>
  );
}

export default AddComment;
