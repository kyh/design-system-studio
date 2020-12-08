import { useParams } from "react-router-dom";

type UrlParams = {
  systemId: string;
  tokenKey: string;
  componentKey: string;
};

export const useEditorParams = () => {
  return useParams<UrlParams>();
};
