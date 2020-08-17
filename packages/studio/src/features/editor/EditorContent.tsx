import React from "react";
import { useQueryParams } from "utils/queryUtils";
import { Content } from "features/editor/components/PageLayout";

import { useTokens } from "features/tokens/tokensSlice";
import { TokenContent } from "features/tokens/TokenContent";
import { ComponentContent } from "features/themes/ComponentContent";

export const EditorContent = () => {
  const { state, dispatch } = useTokens();
  const params = useQueryParams();
  const tokenKey = params.get("t");
  const componentKey = params.get("c");

  return (
    <Content>
      {!!tokenKey && (
        <TokenContent
          tokenKey={tokenKey}
          token={state[tokenKey]}
          dispatch={dispatch}
        />
      )}
      {!!componentKey && (
        <ComponentContent componentKey={componentKey} dispatch={dispatch} />
      )}
    </Content>
  );
};
