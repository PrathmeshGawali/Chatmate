import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/spinner.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/spinner.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { cn } from "/src/lib/utils.ts.js";
const Spinner = React.forwardRef(
  _c = ({ className, size, ...props }, ref) => {
    const computeDelay = (i) => `${-1.2 + i * 0.1}s`;
    const computeRotation = (i) => `${i * 30}deg`;
    return /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: cn(``, className),
        role: "status",
        "aria-label": "Loading",
        ref,
        style: {
          width: `${size ? size : "20"}px`,
          height: `${size ? size : "20"}px`
        },
        ...props,
        children: /* @__PURE__ */ jsxDEV("div", { className: "relative left-1/2 top-1/2 size-full", children: [...Array(12)].map(
          (_, i) => /* @__PURE__ */ jsxDEV(
            "div",
            {
              className: "absolute left-[-10%] top-[-3.9%] h-[8%] w-[24%] animate-spinner rounded-md bg-foreground",
              style: {
                animationDelay: computeDelay(i),
                transform: `rotate(${computeRotation(i)}) translate(146%)`
              }
            },
            i,
            false,
            {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/spinner.tsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          )
        ) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/spinner.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/spinner.tsx",
        lineNumber: 21,
        columnNumber: 5
      },
      this
    );
  }
);
_c2 = Spinner;
Spinner.displayName = "Spinner";
export { Spinner };
var _c, _c2;
$RefreshReg$(_c, "Spinner$React.forwardRef");
$RefreshReg$(_c2, "Spinner");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/spinner.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/spinner.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
