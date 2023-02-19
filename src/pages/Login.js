import "./style.css";
import { Button, Form, Input, notification } from "antd";
import axios from "axios";
import { setAccessTokenLocal, setEmail } from "../utils/storage";
import { useNavigate } from "react-router-dom";


const Login = () => {
const [ api] = notification.useNotification();

  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .post(`http://167.235.158.238:3001/login`, {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        setAccessTokenLocal(res.data.accessToken);
        setEmail(res.data.user);
        navigate('/login')
      })
      .catch((err) => {
        api.info(
          {
           message : "Login failed",
           
          }
        )
      });
  };

  return (
    <div className="login">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
