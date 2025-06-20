import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/button.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
import { Slot } from "/vendor/.vite-deps-@radix-ui_react-slot.js__v--58822b58.js";
import { cva } from "/vendor/.vite-deps-class-variance-authority.js__v--58822b58.js";
import __vite__cjsImport5_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = __vite__cjsImport5_react.__esModule ? __vite__cjsImport5_react.default : __vite__cjsImport5_react;
import { cn } from "/src/lib/utils.ts.js";
import { Spinner } from "/src/components/ui/spinner.tsx.js";
import { motion } from "/vendor/.vite-deps-framer-motion.js__v--58822b58.js";
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm shadow-black/[0.04] hover:bg-primary/90",
        outline: "border border-input bg-background shadow-sm shadow-black/[0.04] hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm shadow-black/[0.04] hover:bg-secondary/80",
        tertiary: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        error: "bg-[#d93036] hover:bg-[#ff6166]",
        warning: "bg-[#ff990a] text-primary-foreground hover:bg-[#d27504]"
      },
      size: {
        default: "h-9 px-4 py-2",
        small: "h-8 rounded-lg px-3 text-xs",
        large: "h-10 rounded-lg px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
export const Button = React.forwardRef(
  _c = ({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    prefix,
    suffix,
    disabled = false,
    loading = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonContent = /* @__PURE__ */ jsxDEV(
      Comp,
      {
        className: cn(
          buttonVariants({
            variant: loading ? "secondary" : variant,
            size
          }),
          className
        ),
        ref,
        disabled,
        ...props,
        children: [
          loading ? /* @__PURE__ */ jsxDEV(Spinner, { className: "mr-2" }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx",
            lineNumber: 103,
            columnNumber: 20
          }, this) : null,
          prefix ? /* @__PURE__ */ jsxDEV("span", { className: "mr-2 flex items-center justify-center", children: prefix }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx",
            lineNumber: 105,
            columnNumber: 5
          }, this) : null,
          props.children,
          suffix ? /* @__PURE__ */ jsxDEV("span", { className: "ml-2 flex items-center justify-center", children: suffix }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx",
            lineNumber: 111,
            columnNumber: 5
          }, this) : null
        ]
      },
      void 0,
      true,
      {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx",
        lineNumber: 91,
        columnNumber: 3
      },
      this
    );
    return /* @__PURE__ */ jsxDEV("div", { className: cn(className, disabled && "cursor-not-allowed "), children: /* @__PURE__ */ jsxDEV(motion.div, { whileTap: { scale: 0.93 }, children: buttonContent }, void 0, false, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx",
      lineNumber: 119,
      columnNumber: 5
    }, this);
  }
);
_c2 = Button;
Button.displayName = "Button";
var _c, _c2;
$RefreshReg$(_c, "Button$React.forwardRef");
$RefreshReg$(_c2, "Button");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/button.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
