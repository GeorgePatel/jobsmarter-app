import { useLocation} from "react-router-dom";
import React from "react";
import AllQuestions from "./AllQuestions";

export function GetNameForQuestions(props) {
        let username = useLocation().state.username;

        return <AllQuestions {...props} username = {username}/>
}