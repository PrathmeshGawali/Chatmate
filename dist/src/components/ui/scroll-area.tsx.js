import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/scroll-area.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as ScrollAreaPrimitive from "/vendor/.vite-deps-@radix-ui_react-scroll-area.js__v--58822b58.js";
import { cn } from "/src/lib/utils.ts.js";
const ScrollArea = React.forwardRef(
  _c = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    ScrollAreaPrimitive.Root,
    {
      ref,
      className: cn("relative overflow-hidden", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx",
          lineNumber: 15,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollBar, {}, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx",
          lineNumber: 18,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.Corner, {}, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx",
          lineNumber: 19,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx",
      lineNumber: 10,
      columnNumber: 1
    },
    this
  )
);
_c2 = ScrollArea;
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
const ScrollBar = React.forwardRef(
  _c3 = ({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsxDEV(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }, void 0, false, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx",
      lineNumber: 28,
      columnNumber: 1
    },
    this
  )
);
_c4 = ScrollBar;
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
export { ScrollArea, ScrollBar };
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "ScrollArea$React.forwardRef");
$RefreshReg$(_c2, "ScrollArea");
$RefreshReg$(_c3, "ScrollBar$React.forwardRef");
$RefreshReg$(_c4, "ScrollBar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/scroll-area.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
