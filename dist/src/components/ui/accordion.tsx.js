import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/accordion.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as AccordionPrimitive from "/vendor/.vite-deps-@radix-ui_react-accordion.js__v--58822b58.js";
import { ChevronDown } from "/vendor/.vite-deps-lucide-react.js__v--58822b58.js";
import { cn } from "/src/lib/utils.ts.js";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(
  _c = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    AccordionPrimitive.Item,
    {
      ref,
      className: cn("border-b", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx",
      lineNumber: 13,
      columnNumber: 1
    },
    this
  )
);
_c2 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(
  _c3 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxDEV(
    AccordionPrimitive.Trigger,
    {
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx",
    lineNumber: 25,
    columnNumber: 1
  }, this)
);
_c4 = AccordionTrigger;
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(
  _c5 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    AccordionPrimitive.Content,
    {
      ref,
      className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      ...props,
      children: /* @__PURE__ */ jsxDEV("div", { className: cn("pb-4 pt-0", className), children }, void 0, false, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx",
      lineNumber: 45,
      columnNumber: 1
    },
    this
  )
);
_c6 = AccordionContent;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "AccordionItem$React.forwardRef");
$RefreshReg$(_c2, "AccordionItem");
$RefreshReg$(_c3, "AccordionTrigger$React.forwardRef");
$RefreshReg$(_c4, "AccordionTrigger");
$RefreshReg$(_c5, "AccordionContent$React.forwardRef");
$RefreshReg$(_c6, "AccordionContent");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/accordion.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
