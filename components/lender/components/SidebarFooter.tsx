import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const Footer = ({ type = "desktop" }: { type: string }) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <footer className="footer mt-9 bg-blue-100 px-8 py-2 rounded-2xl">
      <div className="flex justify-between">
        <div
          className={type === "mobile" ? "footer_name-mobile" : "footer_name"}
        >
          <p className="text-xl font-bold text-gray-700">JK</p>
        </div>

        <div className="footer_image" onClick={handleLogout}>
          <LogOut className="w-5 h-5 text-black" />
        </div>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold mt-2">
          Wallet Address:
        </h1>
        <p className="text-12 truncate font-normal text-gray-600">0xA3B**</p>
      </div>
    </footer>
  );
};

export default Footer;
