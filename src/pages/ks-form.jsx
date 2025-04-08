import {
  Button as B,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Typography,
} from "antd";
import styled from "styled-components";
import uz from "../assets/images/uz.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TreeNode } from "antd/es/tree-select";

const Icon = styled.img`
  width: 20px;
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid #013a87;
  font-size: 20px;
  color: #013a87;
  background-color: #fff;
  border-radius: 10px;
  padding: 7px 0;
  transition: 0.3s;
  letter-spacing: 0.5px;
  cursor: pointer;
  ${(props) => props.active && `background-color: #013a87; color:#fff;`}

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 35px;
  line-height: 38px;
  color: #013a87;
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

const Label = styled.span`
  color: #013a87;
  font-weight: 400;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Type = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #013a87;
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;

const Container = styled.div`
  .shadow {
    position: absolute;
    z-index: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 200px 600px #017bd3ab;
  }
  .sh-f {
    top: -200px;
    right: -200px;
  }
  .sh-s {
    bottom: -200px;
    left: -200px;
  }
  @media (max-width: 500px) {
    .sh-f {
      top: -500px;
      right: -500px;
    }
    .sh-s {
      bottom: -500px;
      left: -500px;
    }
  }
`;

export default function KSFORM() {
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    message.loading({ key: "cont", content: "Yuborilmoqda..." });
    if (!active) {
      setError(true);
      return;
    }
    const res = await axios.post(import.meta.env.VITE_GOOGLESHEETS_API, [
      {
        Ism: values.name,
        Telefon: values.phone,
        Type: active,
      },
    ]);

    if (res.status === 200) {
      message.success({ key: "cont", content: "Muvaffaqiyatli yubo'rildi!" });
      if (active === "offline") {
        window.location.href = "https://www.instagram.com/aipply.academy/";
      } else {
        navigate("/last-step");
      }
    } else {
      message.error({ key: "cont", content: "Xatolik!" });
    }
  };

  return (
    <Container>
      <Modal
        open
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        closable={false}
        width={600}
        title={<Title>Davom etish uchun ma’lumotingizni kiriting</Title>}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Form.Item
                name="name"
                label={<Label>Ismingiz</Label>}
                rules={[{ required: true, message: "Ismingizni kiriting!" }]}
              >
                <Input size="large" style={{ border: "1px solid #013a87" }} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="phone"
                label={<Label>Telefon raqamingiz</Label>}
                rules={[
                  { required: true, message: "Telefon raqamingizni kiriting!" },
                ]}
              >
                <Input
                  placeholder="99-999-99-99"
                  style={{ border: "1px solid #013a87" }}
                  prefix={
                    <span>
                      <Icon src={uz} /> +9989
                    </span>
                  }
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Type>Ta’lim shaklini tanlang</Type>
            </Col>
            <Col span={12}>
              <Button
                active={active === "online"}
                onClick={() => {
                  setActive("online");
                  setError(false);
                }}
                type="button"
              >
                Onlayn
              </Button>
            </Col>
            <Col span={12}>
              <Button
                active={active === "offline"}
                onClick={() => {
                  setActive("offline");
                  setError(false);
                }}
                type="button"
              >
                Offlayn
              </Button>
            </Col>
            {error && (
              <Typography.Text type="danger">
                Ta’lim shaklini tanlang!
              </Typography.Text>
            )}
            <Col span={24}>
              <B
                htmlType="submit"
                danger
                type="primary"
                size="large"
                style={{ width: "100%" }}
              >
                DAVOM ETISH
              </B>
            </Col>
          </Row>
        </Form>
      </Modal>
      <div className="shadow sh-f"></div>
      <div className="shadow sh-s"></div>
    </Container>
  );
}
