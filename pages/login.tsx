import Head from "next/head";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "antd";
import { useAuth } from "../hooks";
import { LoginPayload } from "../models";
export default function LoginPage(props: any) {
  const { profile, error, firstLoading, login, logout } = useAuth();
  const onFinish = async (values: LoginPayload) => {
    try {
      await login(values);
    } catch (err: unknown) {
      console.log(err);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  console.log(profile);
  return (
    <div className="bg-orange">
      <Head>
        <title>Đăng nhập</title>
        <meta name="description" content="Đăng nhập tài khoản" />
      </Head>
      <h1>Trang đăng nhập</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="identifier"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="ghost" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link href={"/register"}>Chuyển sang trang đăng ký</Link>
      <Button onClick={logout} type="ghost" htmlType="submit">
        Log out
      </Button>
      {/* {profile && profile.data} */}
    </div>
  );
}
