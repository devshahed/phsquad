import React from "react";
import { ReactComponent as Home } from "./assets/icons/Home.svg";
import { ReactComponent as Editor } from "./assets/icons/Editor.svg";
import { ReactComponent as User } from "./assets/icons/User.svg";
import { ReactComponent as Tools } from "./assets/icons/Tools.svg";
import { ReactComponent as ThemeChanger } from "./assets/icons/Theme.svg";
import { ReactComponent as Search } from "./assets/icons/Search.svg";

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
        case "search":
            return <Search fill={fill} />;
        default:
            return <div>Icon</div>;
    }
};
export default Icon;
