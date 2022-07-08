import React from "react";
import "../UsersStyle.css";
import UsersTasks from "../UsersTasks/UsersTasks";
import UsersList from "./UsersList";

const UserTemplate: React.FC = () => {
  return (
      <div className="container">
        <div className="gradientBorder"/>
        <div className="titleCont">
        <div className="title">
        </div>
          <h1>Onboarding Tracker</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="containerUsers">
            <h1 style={{ marginLeft: "33px", fontFamily: "Comic Neue" }}>
              Users
            </h1>
            <UsersList />
          </div>
          <UsersTasks />
        </div>
      </div>
  );
};

export default UserTemplate;
