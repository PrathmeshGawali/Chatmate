import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/dropdown-menu.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import * as DropdownMenuPrimitive from "/vendor/.vite-deps-@radix-ui_react-dropdown-menu.js__v--58822b58.js";
import { Check, ChevronRight, Circle } from "/vendor/.vite-deps-lucide-react.js__v--58822b58.js";
import { cn } from "/src/lib/utils.ts.js";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef(
  _c = ({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.SubTrigger,
    {
      ref,
      className: cn(
        "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxDEV(ChevronRight, { className: "ml-auto" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 35,
          columnNumber: 5
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 25,
      columnNumber: 1
    },
    this
  )
);
_c2 = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(
  _c3 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.SubContent,
    {
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 45,
      columnNumber: 1
    },
    this
  )
);
_c4 = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(
  _c5 = ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Content,
    {
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
    lineNumber: 61,
    columnNumber: 1
  }, this)
);
_c6 = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(
  _c7 = ({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Item,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 82,
      columnNumber: 1
    },
    this
  )
);
_c8 = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(
  _c9 = ({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.CheckboxItem,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 108,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 107,
          columnNumber: 5
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 98,
      columnNumber: 1
    },
    this
  )
);
_c10 = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(
  _c11 = ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.RadioItem,
    {
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 132,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 131,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
          lineNumber: 130,
          columnNumber: 5
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 122,
      columnNumber: 1
    },
    this
  )
);
_c12 = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(
  _c13 = ({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Label,
    {
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 146,
      columnNumber: 1
    },
    this
  )
);
_c14 = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(
  _c15 = ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
    DropdownMenuPrimitive.Separator,
    {
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 162,
      columnNumber: 1
    },
    this
  )
);
_c16 = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxDEV(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx",
      lineNumber: 175,
      columnNumber: 5
    },
    this
  );
};
_c17 = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
};
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
$RefreshReg$(_c, "DropdownMenuSubTrigger$React.forwardRef");
$RefreshReg$(_c2, "DropdownMenuSubTrigger");
$RefreshReg$(_c3, "DropdownMenuSubContent$React.forwardRef");
$RefreshReg$(_c4, "DropdownMenuSubContent");
$RefreshReg$(_c5, "DropdownMenuContent$React.forwardRef");
$RefreshReg$(_c6, "DropdownMenuContent");
$RefreshReg$(_c7, "DropdownMenuItem$React.forwardRef");
$RefreshReg$(_c8, "DropdownMenuItem");
$RefreshReg$(_c9, "DropdownMenuCheckboxItem$React.forwardRef");
$RefreshReg$(_c10, "DropdownMenuCheckboxItem");
$RefreshReg$(_c11, "DropdownMenuRadioItem$React.forwardRef");
$RefreshReg$(_c12, "DropdownMenuRadioItem");
$RefreshReg$(_c13, "DropdownMenuLabel$React.forwardRef");
$RefreshReg$(_c14, "DropdownMenuLabel");
$RefreshReg$(_c15, "DropdownMenuSeparator$React.forwardRef");
$RefreshReg$(_c16, "DropdownMenuSeparator");
$RefreshReg$(_c17, "DropdownMenuShortcut");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/dropdown-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
