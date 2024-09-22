"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  isActive,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={`block py-2 px-4 ${
        isActive ? "text-red-500" : "text-gray-600 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isCheckDrugActive = pathname.startsWith("/check-drug");

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Beta Solution Logo"
              width={100}
              height={50}
              priority
              style={{ height: "auto", width: "auto" }}
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavItem href="/" isActive={pathname === "/"}>
              Home
            </NavItem>
            <NavItem href="/check-drug" isActive={isCheckDrugActive}>
              Check Drug
            </NavItem>
            <NavItem
              href="/pharmacy-finder"
              isActive={pathname === "/pharmacy-finder"}
            >
              Pharmacy Finder
            </NavItem>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
          <nav className="flex flex-col">
            <NavItem href="/" isActive={pathname === "/"} onClick={toggleMenu}>
              Home
            </NavItem>
            <NavItem
              href="/check-drug"
              isActive={isCheckDrugActive}
              onClick={toggleMenu}
            >
              Check Drug
            </NavItem>
            <NavItem
              href="/pharmacy-finder"
              isActive={pathname === "/pharmacy-finder"}
              onClick={toggleMenu}
            >
              Pharmacy Finder
            </NavItem>
          </nav>
        </div>
      )}
    </header>
  );
}
