import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import styles from "./styles.module.css";

const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState(router.pathname);

  const navs = useMemo(
    () => [
      {
        title: "Minha carteira",
        url: "/carteira",
      },
      {
        title: "Extrato de Dividendos",
        url: "/dividendos",
      },
      {
        title: "Adicionar operação",
        url: "/operacoes",
      },
    ],
    []
  );

  return (
    <Layout className="layout">
      <Header>
        <div className={styles.logo}>Dividendando</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activeNav]}>
          {navs.map((nav) => {
            return (
              <Menu.Item key={nav.url} onClick={() => setActiveNav(nav.url)}>
                <Link href={nav.url}>{nav.title}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "24px 48px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Dividendando ©2021 Created by{" "}
        <a href="https://github.com/thamys">thamys</a>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
