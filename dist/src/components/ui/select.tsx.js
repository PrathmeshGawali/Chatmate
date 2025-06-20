import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/select.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "/vendor/.vite-deps-@radix-ui_react-icons.js__v--58822b58.js";
import * as SelectPrimitive from "/vendor/.vite-deps-@radix-ui_react-select.js__v--58822b58.js";
import { cn } from "/src/lib/utils.ts.js";
import { motion } from "/vendor/.vite-deps-framer-motion.js__v--58822b58.js";
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
export const selectAnimationVariants = {
  zoom: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { type: "spring", stiffness: 600, damping: 25 }
  },
  scaleBounce: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: [1.2, 0.9, 1] },
    exit: { opacity: 0, scale: 0.5 },
    transition: { type: "spring", stiffness: 600, damping: 20 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { type: "spring", stiffness: 500, damping: 20 }
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { type: "spring", stiffness: 500, damping: 20 }
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { type: "spring", stiffness: 400, damping: 20 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { type: "spring", stiffness: 400, damping: 20 }
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: 90 },
    transition: { type: "spring", stiffness: 500, damping: 30 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -180 },
    transition: { type: "spring", stiffness: 500, damping: 25 }
  }
};
const SelectTrigger = React.forwardRef(_c = ({ className, children, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Trigger,
    {
      ref,
      className: cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-primary/75 focus:dark:ring-primary/35 focus:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsxDEV(CaretSortIcon, { className: "h-4 w-4 opacity-50" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 90,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 89,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  );
});
_c2 = SelectTrigger;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SelectPrimitive.ScrollUpButton,
    {
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1 w-full absolute top-0 bg-popover z-10",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ChevronUpIcon, {}, void 0, false, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
        lineNumber: 109,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 101,
      columnNumber: 1
    },
    this
  )
);
_c4 = SelectScrollUpButton;
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(
  _c5 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SelectPrimitive.ScrollDownButton,
    {
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1 w-full absolute bottom-0 bg-popover z-10",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxDEV(ChevronDownIcon, {}, void 0, false, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this)
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 118,
      columnNumber: 1
    },
    this
  )
);
_c6 = SelectScrollDownButton;
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const AnimatedSelectContent = React.forwardRef(
  _c7 = ({ className, children, position = "popper", selectedVariant, ...props }, ref) => /* @__PURE__ */ jsxDEV(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Content,
    {
      className: cn(
        "relative z-50 max-h-96 my-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      ref,
      asChild: true,
      position,
      ...props,
      children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          className: cn(
            "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
            className
          ),
          ...selectAnimationVariants[selectedVariant],
          children: [
            /* @__PURE__ */ jsxDEV(SelectScrollUpButton, {}, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              SelectPrimitive.Viewport,
              {
                className: cn(
                  "p-1",
                  position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children
              },
              void 0,
              false,
              {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
                lineNumber: 164,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(SelectScrollDownButton, {}, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
              lineNumber: 173,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 156,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 144,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
    lineNumber: 143,
    columnNumber: 1
  }, this)
);
_c8 = AnimatedSelectContent;
AnimatedSelectContent.displayName = SelectPrimitive.Content.displayName;
const StaticSelectContent = React.forwardRef(
  _c9 = ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Content,
    {
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV(SelectScrollUpButton, {}, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 198,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          },
          void 0,
          false,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
            lineNumber: 199,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(SelectScrollDownButton, {}, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 208,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 187,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
    lineNumber: 186,
    columnNumber: 1
  }, this)
);
_c10 = StaticSelectContent;
StaticSelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectContent = React.forwardRef(_c11 = (props, ref) => {
  const selectedVariant = props.variants || "zoom";
  return /* @__PURE__ */ jsxDEV(
    AnimatedSelectContent,
    {
      selectedVariant,
      ref,
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 223,
      columnNumber: 5
    },
    this
  );
});
_c12 = SelectContent;
SelectContent.displayName = "SelectContent";
const SelectLabel = React.forwardRef(
  _c13 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Label,
    {
      ref,
      className: cn("px-2 py-1.5 text-sm font-semibold", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 237,
      columnNumber: 1
    },
    this
  )
);
_c14 = SelectLabel;
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(
  _c15 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Item,
    {
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(CheckIcon, { className: "h-4 w-4" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 259,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 258,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 257,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ jsxDEV(SelectPrimitive.ItemText, { children }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
          lineNumber: 262,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 249,
      columnNumber: 1
    },
    this
  )
);
_c16 = SelectItem;
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(
  _c17 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    SelectPrimitive.Separator,
    {
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx",
      lineNumber: 271,
      columnNumber: 1
    },
    this
  )
);
_c18 = SelectSeparator;
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;
$RefreshReg$(_c, "SelectTrigger$React.forwardRef");
$RefreshReg$(_c2, "SelectTrigger");
$RefreshReg$(_c3, "SelectScrollUpButton$React.forwardRef");
$RefreshReg$(_c4, "SelectScrollUpButton");
$RefreshReg$(_c5, "SelectScrollDownButton$React.forwardRef");
$RefreshReg$(_c6, "SelectScrollDownButton");
$RefreshReg$(_c7, "AnimatedSelectContent$React.forwardRef");
$RefreshReg$(_c8, "AnimatedSelectContent");
$RefreshReg$(_c9, "StaticSelectContent$React.forwardRef");
$RefreshReg$(_c10, "StaticSelectContent");
$RefreshReg$(_c11, "SelectContent$React.forwardRef");
$RefreshReg$(_c12, "SelectContent");
$RefreshReg$(_c13, "SelectLabel$React.forwardRef");
$RefreshReg$(_c14, "SelectLabel");
$RefreshReg$(_c15, "SelectItem$React.forwardRef");
$RefreshReg$(_c16, "SelectItem");
$RefreshReg$(_c17, "SelectSeparator$React.forwardRef");
$RefreshReg$(_c18, "SelectSeparator");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/select.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
