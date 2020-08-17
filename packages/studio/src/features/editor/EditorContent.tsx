import React from "react";
import { useQueryParams } from "utils/queryUtils";
import { Content } from "features/editor/components/PageLayout";

import { useTokens } from "features/tokens/tokensSlice";
import { TokenContent } from "features/tokens/TokenContent";
import { useThemes } from "features/themes/themesSlice";
import { ComponentContent } from "features/themes/ComponentContent";

export const EditorContent = () => {
  const { state: tokensState, dispatch } = useTokens();
  const { state: themesState } = useThemes();
  const params = useQueryParams();

  const tokenKey = params.get("t");
  const componentKey = params.get("c");

  return (
    <Content>
      {!!tokenKey && (
        <TokenContent
          tokenKey={tokenKey}
          token={tokensState[tokenKey]}
          dispatch={dispatch}
        />
      )}
      {!!componentKey && (
        <ComponentContent
          componentKey={componentKey}
          components={themesState.currentTheme.components}
          dispatch={dispatch}
        />
      )}
    </Content>
  );
};
