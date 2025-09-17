"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PageContainer } from "./page-container";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Why Pristiq",
    items: [
      { title: "Why Modular", href: "/why-modular" },
      { title: "Why PristiqBuild", href: "/why-pristiq" },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Prefabricated/Modular Builds",
        href: "/prefabricated-modular",
      },
      { title: "Light Gauge Steel Roofing", href: "/lgs-roofing" },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Projects", href: "/projects" },
  { title: "About us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickToTop, setStickToTop] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setStickToTop(true);
      } else {
        setStickToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-500 ${
        stickToTop ? "border-b border-gray-100 shadow-lg" : "shadow-none"
      }`}
    >
      <PageContainer
        className={`flex items-center justify-between px-6 py-4 text-sm lg:py-6`}
      >
        <Link href="/">
          <h1 className="text-primary flex text-xl font-bold lg:text-2xl">
            <span>PRISTIQ</span>
            <span className="ml-2 self-end">BUILD</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger>
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={cn("grid gap-1")}>
                          {link.items.map((item) => (
                            <li className="w-full">
                              <Link
                                href={item.href}
                                className={cn(
                                  "w-full items-start text-left",
                                  buttonVariants({ variant: "ghost" }),
                                )}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href!}
                        className={cn(buttonVariants({ variant: "ghost" }))}
                      >
                        {link.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ variant: "ghost" }))}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </PageContainer>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 z-50 h-screen w-full bg-black/90 shadow-2xl backdrop-blur-xl md:hidden`}
        >
          <div className="flex h-full flex-col bg-black/80">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-white/20 bg-black/60 p-6">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto bg-black/40 p-6">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    {link.items ? (
                      <MobileDropdown title={link.title}>
                        {link.items.map((item) => (
                          <MobileLink
                            key={item.title}
                            href={item.href}
                            onNavigate={toggleMenu}
                          >
                            {item.title}
                          </MobileLink>
                        ))}
                      </MobileDropdown>
                    ) : (
                      <MobileLink href={link.href!} onNavigate={toggleMenu}>
                        {link.title}
                      </MobileLink>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={toggleMenu}
                    className="from-acc to-acc/90 hover:border-acc hover:text-primary block rounded-lg border-2 border-transparent bg-gradient-to-r p-3 px-6 text-center text-sm font-medium tracking-widest text-white uppercase shadow-lg outline-2 transition-all duration-300 hover:bg-transparent hover:shadow-xl"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const MobileLink = ({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={onNavigate}
    className="block rounded-lg px-3 py-2 text-sm font-medium tracking-widest text-white uppercase transition-all duration-300 hover:bg-white/10"
  >
    {children}
  </Link>
);

const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium tracking-widest text-white uppercase transition duration-300 hover:bg-white/10"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2 space-y-2 pl-4">{children}</div>}
    </div>
  );
};

export default Navbar;

interface Menu {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton = ({ isOpen, toggleMenu }: Menu) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="bg-acc z-50 flex h-7 w-7 flex-col items-center justify-center gap-1 rounded-sm p-1 outline-2 outline-offset-2 md:hidden"
    >
      <span className="sr-only">Mobile menu toggle</span>
      {isOpen ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <MenuIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
};