import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@dsstudio/proto";
import { useQueryParams } from "utils/queryUtils";
import { useTokens, tokensActions } from "features/tokens/tokensSlice";
import { useThemes, themesActions } from "features/themes/themesSlice";
import { Sidebar } from "./components/PageLayout";

export const LeftSidebar = () => {
  const { state: tokensState, dispatch } = useTokens();
  const {
    state: {
      currentTheme: { components },
    },
  } = useThemes();
  const params = useQueryParams();

  const currentTokenKey = params.get("t");
  const currentComponentKey = params.get("c");

  const addNewTokenSet = () => {
    dispatch(tokensActions.add_new_token_set());
  };

  const tokenKeys = Object.keys(tokensState);
  const componentKeys = Object.keys(components);

  return (
    <Sidebar side="left">
      <Flex>
        <Link to={{ search: `?t=${tokenKeys[0]}` }}>Tokens</Link>
        <Link to={{ search: `?c=${componentKeys[0]}` }}>Components</Link>
      </Flex>
      {!!currentTokenKey && (
        <>
          {tokenKeys.map((tokenKey) => (
            <Link to={{ search: `?t=${tokenKey}` }} key={tokenKey}>
              {tokensState[tokenKey].name}
            </Link>
          ))}
          <button onClick={addNewTokenSet}>Add new token set</button>
        </>
      )}
      {!!currentComponentKey && (
        <>
          {componentKeys.map((componentKey) => (
            <Link to={{ search: `?c=${componentKey}` }} key={componentKey}>
              {components[componentKey].name}
            </Link>
          ))}
          <button>Add new component</button>
        </>
      )}
    </Sidebar>
  );
};
