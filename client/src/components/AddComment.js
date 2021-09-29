import React from "react";
import defaultAvatar from "../assets/default-avatar.png";
import Wrapper from "../styles/CommentList";
import CommentList from "./CommentList";

function AddComment() {
  return (
    <Wrapper>
      <h3>0 comments</h3>

      <div className="add-comment">
        <img src={defaultAvatar} alt="default user" />
        <textarea placeholder="Add a public comment..." value="" rows={1} />
      </div>

      <CommentList />
    </Wrapper>
  );
}

export default AddComment;
