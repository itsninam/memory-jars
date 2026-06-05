import React from "react";
import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import UserAvatar from "../../../../components/UserAvatar";
import { getUserColor } from "../../../../utils/getUserColor";
import { LuX } from "react-icons/lu";

function JarMembers({ showModal, setShowModal, user }) {
  return (
    <Modal isOpen={showModal} onClick={() => setShowModal(false)}>
      <div className="container">
        <h2 className="title">People</h2>
        <Button
          onClick={() => setShowModal(false)}
          label={<LuX />}
          className="close-btn"
        />
        <div className="content">
          {user.map((item) => (
            <div className="users" key={item}>
              <UserAvatar background={getUserColor(item)}>
                {item[0].toUpperCase()}
              </UserAvatar>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default JarMembers;
