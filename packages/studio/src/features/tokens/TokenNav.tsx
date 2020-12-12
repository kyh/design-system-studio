import { NavLink } from "react-router-dom";
import { useTokens, tokensActions } from "features/tokens/tokensSlice";
import { useEditorParams } from "features/editor/editorHooks";

export const TokenNav: React.FC = () => {
  const { systemId } = useEditorParams();
  const { state: tokensState, dispatch } = useTokens();
  const tokenKeys = Object.keys(tokensState);
  const addNewTokenSet = () => {
    dispatch(tokensActions.add_new_token_set());
  };
  return (
    <>
      {tokenKeys.map((tokenKey) => (
        <NavLink to={`/system/${systemId}/tokens/${tokenKey}`} key={tokenKey}>
          {tokensState[tokenKey].name}
        </NavLink>
      ))}
      <button onClick={addNewTokenSet}>Add new token set</button>
    </>
  );
};
