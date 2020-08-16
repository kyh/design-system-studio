import React from "react";
import { Link } from "react-router-dom";
import { useTokens, tokensActions } from "features/tokens/tokensSlice";
import { Sidebar } from "./components/PageLayout";

export const LeftSidebar = () => {
  const { state, dispatch } = useTokens();

  const addNewTokenSet = () => {
    dispatch(tokensActions.add_new_token_set());
  };

  return (
    <Sidebar side="left">
      {Object.keys(state).map((tokenKey) => (
        <Link to={{ search: `?t=${tokenKey}` }} key={tokenKey}>
          {state[tokenKey].name}
        </Link>
      ))}
      <button onClick={addNewTokenSet}>Add new token set</button>
    </Sidebar>
  );
};
