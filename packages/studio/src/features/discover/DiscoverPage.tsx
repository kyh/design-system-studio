import React from "react";
import { Text } from "@dsstudio/proto";
import styled from "styled-components";

export const DiscoverPage: React.FC = () => {
  return (
    <div>
      <Navigation>
        <Logo src="/logo.svg" />
      </Navigation>
      <div>Discover Page</div>
    </div>
  );
};

const Navigation = styled.nav`
  height: ${({ theme }) => theme.size.md};
`;

const Logo = styled.img``;
