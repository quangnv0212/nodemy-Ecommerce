import Head from "next/head";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "antd";
export default function LoginPage(props: any) {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
    </div>
  );
}
