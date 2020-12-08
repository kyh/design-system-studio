import { useTokens } from "features/tokens/tokensSlice";
import { useEditorParams } from "features/editor/editorHooks";
import { TokenContentTable } from "./components/TokenContentTable";

export const TokenContent: React.FC = () => {
  const { state } = useTokens();
  const { tokenKey } = useEditorParams();

  switch (tokenKey) {
    default:
      if (!tokenKey) {
        return null;
      }
      return <TokenContentTable tokenKey={tokenKey} token={state[tokenKey]} />;
  }
};
