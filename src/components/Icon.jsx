import React from "react";
import { ReactComponent as Home } from "./assets/icons/Home.svg";
import { ReactComponent as Editor } from "./assets/icons/Editor.svg";
import { ReactComponent as User } from "./assets/icons/User.svg";
import { ReactComponent as Tools } from "./assets/icons/Tools.svg";
import { ReactComponent as ThemeChanger } from "./assets/icons/Theme.svg";
import { ReactComponent as Search } from "./assets/icons/Search.svg";
import { ReactComponent as Settings } from "./assets/icons/Settings.svg";
import { ReactComponent as Notification } from "./assets/icons/Notification.svg";
import { ReactComponent as Profile } from "./assets/icons/Profile.svg";
import { ReactComponent as Tags } from "./assets/icons/Tags.svg";
import { ReactComponent as ThreeDots } from "./assets/icons/ThreeDots.svg";
import { ReactComponent as Heart } from "./assets/icons/Heart.svg";
import { ReactComponent as Comment } from "./assets/icons/Comment.svg";
import { ReactComponent as Share } from "./assets/icons/Share.svg";

const Icon = ({ name, fill }) => {
    switch (name) {
        case "home":
            return <Home fill={fill} />;
        case "editor":
            return <Editor fill={fill} />;
        case "tools":
            return <Tools fill={fill} />;
        case "user":
            return <User fill={fill} />;
        case "theme":
            return <ThemeChanger fill={fill} />;
        case "profile":
            return <Profile fill={fill} />;
        case "notification":
            return <Notification fill={fill} />;
        case "settings":
            return <Settings fill={fill} />;
        case "tags":
            return <Tags fill={fill} />;
        case "search":
            return <Search fill={fill} />;
        case "heart":
            return <Heart fill={fill} />;
        case "comment":
            return <Comment fill={fill} />;
        case "share":
            return <Share fill={fill} />;
        case "threedots":
            return <ThreeDots fill={fill} />;
        default:
            return <div>Icon</div>;
    }
};
export default Icon;
