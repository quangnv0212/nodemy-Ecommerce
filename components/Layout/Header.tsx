import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo_ngang.png";
type HeaderProps = {};

export default function Header(props: HeaderProps) {
  return (
    <header className="py-5">
      <div className="px-4 mx-auto max-w-7xl">
        <nav className="flex item-end">
          <Link href={"/"}>
            <Image
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="logo"
              src={logo}
            ></Image>
          </Link>
          <div className="ml-5 text-xl lg:text-2xl">Đăng ký</div>
        </nav>
      </div>
    </header>
  );
}
