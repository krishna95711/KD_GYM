"use client";
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
// import { Layout } from "./layout.jsx";
import { AcmeLogo } from "./Logo.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const vid = `video?data="3%2F4%20sit-up"`;

export default function App() {
  const collapseItems = [
    { name: "Home", value: "/" },
    { name: "Animation", value: "/exercise" },
    { name: "Videos", value: "/video" },
    { name: "Favourite", value: "/favourite" },
    { name: "Support", value: "/support" },
    { name: "About", value: "/about" },
  ];
  const [data, setData] = useState("guest mode");

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.email);
  };
  // useEffect(() => {
  //   getUserDetails;
  // }, []);
  const router = useRouter();
  // const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      setData("guest mode");
      router.push("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <Navbar shouldHideOnScroll variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          KDG
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/exercise">Animation</Navbar.Link>
        <Navbar.Link href="video">Video</Navbar.Link>
        <Navbar.Link href="/favourite">favourite</Navbar.Link>
        <Navbar.Link href="/support">Support</Navbar.Link>
        <Navbar.Link href="/about">about</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                onClick={getUserDetails}
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            // onAction={(actionKey) => console.log({actionKey})}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {data}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="" withDivider>
              <Link href="/profile"> My Profile</Link>
            </Dropdown.Item>

            <Dropdown.Item key="analytics" withDivider>
              <Link href="/favourite"> Favourite exercise</Link>
            </Dropdown.Item>
            {/* <Dropdown.Item key="system">System</Dropdown.Item> */}
            {/* <Dropdown.Item key="configurations">Configurations</Dropdown.Item> */}
            <Dropdown.Item key="help_and_feedback" withDivider>
              <Link href="/support"> Help & Feedback </Link>
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              {data !== "guest mode" ? (
                <button onClick={logout}>Log out</button>
              ) : (
                <button>
                  <Link href="/login">Sign In</Link>
                </button>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item.name}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.value}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
