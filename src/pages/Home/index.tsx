import { getCookie, setCookie } from "@/utils/cookies";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(
    getCookie("isAuthenticated")
  );
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated === null || isAuthenticated === undefined) {
      setIsAuthenticated("false")
    }
    console.log(isAuthenticated)
  }, [isAuthenticated])
  
  return (
    <>
      <h1>Home Page</h1>
      <div>
        Anyone can access it, regardless of whether they are logged in or not!
      </div>
      <br />
      <h1>{isAuthenticated}</h1>
      {isAuthenticated === null || isAuthenticated === "false" ? (
        <button
          onClick={() => {
            navigate("/blog/login");
          }}
        >
          Login Page
        </button>
      ) : (
        <div>
          <button
            onClick={() => {
              setIsAuthenticated("false");
              setCookie("isAuthenticated", "false");
            }}
          >
            {" "}
            Logout
          </button>
          <button
            onClick={() => {
              navigate("/blog/dashboard");
            }}
          >
            Dashboard
          </button>
        </div>
      )}
    </>
  );
};
export default HomePage;

