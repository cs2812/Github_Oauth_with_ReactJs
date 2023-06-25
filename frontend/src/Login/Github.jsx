import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Github = ({ setLogin }) => {
  const navigate = useNavigate();
  const proxy_url = "http://localhost:8080/github/auth";

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      // console.log(hasCode, "URL", newUrl);
      window.history.pushState({}, null, newUrl[0]);

      const requestData = {
        code: newUrl[1],
      };

      fetch(`${proxy_url}/${requestData.code}`, {
        method: "POST",
        // mode: "no-cors",
        // headers: {
        //   "Content-Type": "application/json",
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // body: requestData,
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("data", data);
          setLogin({ status: true, data });
          navigate("/");
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, []);

  return (
    <div>
      <AiFillGithub size={"25px"} />
      <button>
        <a href="https://github.com/login/oauth/authorize?client_id=eea4c0d173290c960783">
          Login with Github
        </a>
      </button>
    </div>
  );
};

export default Github;
