import Constants, { ExecutionEnvironment } from "expo-constants";
import { NativeToast as Toast } from "./NativeToast.mjs";
import { jsx } from "react/jsx-runtime";
const isExpo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient,
  CustomToast = () => isExpo ? null : /* @__PURE__ */jsx(Toast, {});
export { CustomToast };