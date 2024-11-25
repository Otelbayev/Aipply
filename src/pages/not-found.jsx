import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Not = () => {
  const naviagte = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => naviagte("/")} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default Not;
