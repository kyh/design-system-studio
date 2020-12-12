import { NavLink } from "react-router-dom";
import { useThemes } from "features/themes/themesSlice";
import { useEditorParams } from "features/editor/editorHooks";

export const ComponentNav: React.FC = () => {
  const { systemId } = useEditorParams();
  const { components } = useThemes();
  const componentKeys = Object.keys(components);
  return (
    <>
      {componentKeys.map((componentKey) => (
        <NavLink
          to={`/system/${systemId}/components/${componentKey}`}
          key={componentKey}
        >
          {components[componentKey].name}
        </NavLink>
      ))}
      <button>Add new component</button>
    </>
  );
};
