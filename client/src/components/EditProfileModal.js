import React from "react";
import Button from "../styles/Button";
import Wrapper from "../styles/EditProfileModal";
import { CloseIcon } from "./Icons";

function EditProfileModal() {
  return (
    <Wrapper>
      <div className="container"></div>
      <div className="edit-profile">
        <form>
          <div className="modal-header">
            <h3>
              <CloseIcon />
              <span>Edit Profile</span>
            </h3>
            <Button type="submit">Save</Button>
          </div>

          <div className="cover-upload-container">
            <label htmlFor="cover-upload">
              <img
                className="pointer"
                width="100%"
                height="200px"
                src="https://dummyimage.com/600x200"
                alt="cover"
              />
            </label>
            <input
              id="cover-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>

          <div className="avatar-upload-icon">
            <label htmlFor="avatar-upload">
              <img
                src="https://dummyimage.com/250x250"
                className="pointer avatar lg"
                alt="avatar"
              />
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <input
            type="text"
            placeholder="Insert username"
            id="username"
            required
          />
          <textarea id="about" placeholder="Tell viewers about your channel" />
        </form>
      </div>
    </Wrapper>
  );
}

export default EditProfileModal;
