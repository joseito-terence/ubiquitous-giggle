import { jsx as _jsx } from "react/jsx-runtime";
import Constants, { ExecutionEnvironment } from "expo-constants";
import { NativeToast as Toast } from "./NativeToast";
var isExpo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient, CustomToast = function() {
  return isExpo ? null : /* @__PURE__ */ _jsx(Toast, {});
};
export {
  CustomToast
};
//# sourceMappingURL=CustomToast.js.map
