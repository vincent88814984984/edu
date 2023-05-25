import { ConnectButton, RainbowKitProvider, getDefaultWallets, } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { publicProvider } from '@wagmi/core/providers/public';
import { Layout as BasicLayout, Breadcrumb, Menu } from 'antd';
import { ItemType } from "antd/es/menu/hooks/useItems";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { createElement } from 'react';
import { hardhat } from 'viem/chains';
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { breadMap } from './bread/breadMap';
import { asideMenuConfig, menuType } from './menuConfig';

const { Header, Content, Footer } = BasicLayout;

const { chains, publicClient } = configureChains(
  [mainnet, hardhat],
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My Education DApp',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const loopMenuItem = (menus: menuType[]): ItemType[] =>
  menus.map(({ icon, children, key, label }: any) => {
    return ({
      key,
      label,
      icon: createElement(icon),
      children: children && loopMenuItem(children),
    })
  });

type LayoutProps = {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const pathSnippets = router.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <Link href={url}>{breadMap[url]}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      title: <Link href="/">主页</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <BasicLayout style={{ minHeight: '100vh' }}>
          <Header>
            <Menu
              style={{ display: 'flex', justifyContent: 'center' }}
              theme="dark"
              mode="horizontal"
              key={router.pathname}
              defaultSelectedKeys={[router.pathname]}
              items={loopMenuItem(asideMenuConfig)}
              onClick={(info) => {
                router.push(info.key)
              }}
            />
            <div
              style={{
                display: 'flex',
                marginTop: 5,
                justifyContent: 'right',
              }}
            >
              <ConnectButton />
            </div>
          </Header>
          <Content style={{ padding: '0 50px', minHeight: '60vh' }}>
            <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} />

            <div style={{ minHeight: '60vh', color: 'black' }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </BasicLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Layout;
