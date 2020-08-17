import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@dss/proto";
import { useQueryParams } from "utils/queryUtils";
import { useTokens, tokensActions } from "features/tokens/tokensSlice";
import { Sidebar } from "./components/PageLayout";

export const LeftSidebar = () => {
  const { state, dispatch } = useTokens();
  const params = useQueryParams();
  const currentTokenKey = params.get("t");
  const currentComponentKey = params.get("c");

  const addNewTokenSet = () => {
    dispatch(tokensActions.add_new_token_set());
  };

  const tokenKeys = Object.keys(state);

  return (
    <Sidebar side="left">
      <Flex>
        <Link to={{ search: `?t=${tokenKeys[0]}` }}>Tokens</Link>
        <Link to={{ search: `?c=1` }}>Components</Link>
      </Flex>
      {!!currentTokenKey ? (
        <>
          {tokenKeys.map((tokenKey) => (
            <Link to={{ search: `?t=${tokenKey}` }} key={tokenKey}>
              {state[tokenKey].name}
            </Link>
          ))}
          <button onClick={addNewTokenSet}>Add new token set</button>
        </>
      ) : (
        <>
          <Link to={{ search: `?c=1` }}>Typography</Link>
        </>
      )}
    </Sidebar>
  );
};
