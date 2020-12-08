import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Text } from "components/library";
import { tokensActions } from "features/tokens/tokensSlice";

type Props = any;

export const TokenContentTable: React.FC<Props> = ({ tokenKey, token }) => {
  return (
    <Box>
      <Box>
        <Text variant="heading" as="h1">
          {token.name}
        </Text>
        <Text>{token.description}</Text>
      </Box>
      <Box>
        <TokenValues tokenKey={tokenKey} values={token.values} />
      </Box>
    </Box>
  );
};

const TokenValues = ({ tokenKey, values }: any) => {
  const dispatch = useDispatch();
  const updateToken = (key: string, value: string) => {
    dispatch(
      tokensActions.update_token_set_values({
        tokenKey,
        values: {
          ...values,
          [key]: value,
        },
      })
    );
  };

  return (
    <>
      {Object.keys(values).map((valueKey) => {
        if (typeof values[valueKey] !== "object") {
          return (
            <TokenValue
              key={`${tokenKey}-${valueKey}`}
              valueKey={valueKey}
              value={values[valueKey]}
              updateToken={updateToken}
            />
          );
        } else {
          return (
            <Box key={`${tokenKey}-${valueKey}`}>
              <Text variant="heading" as="h1">
                {valueKey}
              </Text>
              <TokenValues
                tokenKey={tokenKey}
                values={values[valueKey]}
                dispatch={dispatch}
              />
            </Box>
          );
        }
      })}
    </>
  );
};

const TokenValue = ({ valueKey, value, updateToken }: any) => {
  const [valueKeyState, setValueKeyState] = useState(valueKey);
  const [valueState, setValueState] = useState(value);
  return (
    <Box>
      <input
        type="text"
        value={valueKey}
        onChange={(e) => setValueKeyState(e.target.value)}
        onBlur={() => updateToken(valueKeyState, valueState)}
      />{" "}
      -{" "}
      <input
        type="text"
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
        onBlur={() => updateToken(valueKeyState, valueState)}
      />
    </Box>
  );
};
