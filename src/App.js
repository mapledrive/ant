import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import routes from "./routes";
import { toggleActionCreator } from "./actions";
import { VIEW_ONE_PATH, VIEW_TWO_PATH, VIEW_THREE_PATH } from "./paths";

const { Sider } = Layout;

const AppRoute = ({ component: Component, path, isPrivate, ...props }) => {
  return (
    <Route
      path={path}
      render={(props) => <Component {...props} />}
      {...props}
    />
  );
};

const LayoutContainer = () => {
  const isSiderCollapsed = useSelector((state) => state.ui.isCollapsed);
  const dispatch = useDispatch();
  return (
    <StyledLayout>
      <Sider
        collapsible
        collapsed={isSiderCollapsed}
        onCollapse={() => dispatch(toggleActionCreator())}
      >
        <StyledLogo />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to={VIEW_ONE_PATH}>User</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to={VIEW_TWO_PATH}>Clients</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            <Link to={VIEW_THREE_PATH}>Files</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Layout>
    </StyledLayout>
  );
};

export default LayoutContainer;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledLogo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;
