import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast, useToastState } from "@tamagui/toast";
import { YStack } from "tamagui";
var NativeToast = function() {
  var currentToast = useToastState();
  return !currentToast || currentToast.isHandledNatively ? null : /* @__PURE__ */ _jsx(Toast, {
    duration: currentToast.duration,
    viewportName: currentToast.viewportName,
    enterStyle: {
      opacity: 0,
      scale: 0.5,
      y: -25
    },
    exitStyle: {
      opacity: 0,
      scale: 1,
      y: -20
    },
    y: 0,
    opacity: 1,
    scale: 1,
    animation: "quick",
    children: /* @__PURE__ */ _jsxs(YStack, {
      py: "$1.5",
      px: "$2",
      children: [
        /* @__PURE__ */ _jsx(Toast.Title, {
          lh: "$1",
          children: currentToast.title
        }),
        !!currentToast.message && /* @__PURE__ */ _jsx(Toast.Description, {
          children: currentToast.message
        })
      ]
    })
  }, currentToast.id);
};
export {
  NativeToast
};
//# sourceMappingURL=NativeToast.js.map
