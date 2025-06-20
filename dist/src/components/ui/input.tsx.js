import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/ui/input.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport3_react);
import { cn } from "/src/lib/utils.ts.js";
import { EyeClosedIcon, EyeOpenIcon } from "/vendor/.vite-deps-@radix-ui_react-icons.js__v--58822b58.js";
const Input = _s(React.forwardRef(
  _c = _s(
    ({
      className,
      iclassName,
      prefix,
      suffix,
      prefixStyling = true,
      suffixStyling = true,
      label,
      type,
      error,
      ...props
    }, ref) => {
      _s();
      const prefixRef = React.useRef(null);
      const suffixRef = React.useRef(null);
      const [prefixWidth, setPrefixWidth] = React.useState(0);
      const [suffixWidth, setSuffixWidth] = React.useState(0);
      React.useEffect(() => {
        if (prefixRef.current) {
          setPrefixWidth(prefixRef.current.offsetWidth);
        }
        if (suffixRef.current) {
          setSuffixWidth(suffixRef.current.offsetWidth);
        }
      }, [prefix, suffix]);
      return /* @__PURE__ */ jsxDEV("div", { className: cn("relative", className), children: [
        label && /* @__PURE__ */ jsxDEV(
          "label",
          {
            className: `text-sm ${error ? "text-[#ff6166]" : "text-muted-foreground"} `,
            htmlFor: props.id,
            children: label
          },
          void 0,
          false,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
            lineNumber: 102,
            columnNumber: 9
          },
          this
        ),
        prefix && /* @__PURE__ */ jsxDEV(
          "div",
          {
            ref: prefixRef,
            className: cn(
              "absolute top-0 left-0 h-full flex items-center justify-center pl-2 text-muted-foreground",
              `${prefixStyling ? "rounded-l-md" : ""}`
            ),
            children: [
              prefix,
              prefixStyling && /* @__PURE__ */ jsxDEV("div", { className: "h-[94%] w-px ml-2 bg-border " }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                lineNumber: 118,
                columnNumber: 31
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
            lineNumber: 110,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "input",
          {
            type,
            className: cn(
              "flex w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:border-primary/75 focus-visible:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-50",
              iclassName,
              `${error ? "outline-none ring-2 ring-[#ffe6e6] border-[#ff6166] dark:ring-[#561a1e] focus-visible:dark:ring-primary/35 dark:hover:ring-[#832126] hover:ring-[#f8b9b9]" : ""}`
            ),
            style: {
              paddingLeft: prefix ? `${prefixWidth + 12}px` : "0.75rem",
              paddingRight: suffix ? `${suffixWidth + 12}px` : "0.75rem"
            },
            ref,
            ...props
          },
          void 0,
          false,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
            lineNumber: 121,
            columnNumber: 9
          },
          this
        ),
        suffix && /* @__PURE__ */ jsxDEV(
          "div",
          {
            ref: suffixRef,
            className: cn(
              "absolute top-0 right-0 h-full flex items-center justify-center pr-2 text-muted-foreground",
              `${suffixStyling ? "rounded-r-md" : ""}`
            ),
            children: [
              suffixStyling && /* @__PURE__ */ jsxDEV("div", { className: "h-[94%] w-[1px] mr-2 bg-border " }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                lineNumber: 144,
                columnNumber: 11
              }, this),
              suffix
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
            lineNumber: 136,
            columnNumber: 9
          },
          this
        ),
        error && /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "flex items-center text-sm text-[#ff6166] mt-1",
            role: "alert",
            children: [
              /* @__PURE__ */ jsxDEV(
                "svg",
                {
                  "data-testid": "geist-icon",
                  height: "16",
                  strokeLinejoin: "round",
                  viewBox: "0 0 16 16",
                  width: "16",
                  style: { color: "currentcolor" },
                  children: /* @__PURE__ */ jsxDEV(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M5.30761 1.5L1.5 5.30761L1.5 10.6924L5.30761 14.5H10.6924L14.5 10.6924V5.30761L10.6924 1.5H5.30761ZM5.10051 0C4.83529 0 4.58094 0.105357 4.3934 0.292893L0.292893 4.3934C0.105357 4.58094 0 4.83529 0 5.10051V10.8995C0 11.1647 0.105357 11.4191 0.292894 11.6066L4.3934 15.7071C4.58094 15.8946 4.83529 16 5.10051 16H10.8995C11.1647 16 11.4191 15.8946 11.6066 15.7071L15.7071 11.6066C15.8946 11.4191 16 11.1647 16 10.8995V5.10051C16 4.83529 15.8946 4.58093 15.7071 4.3934L11.6066 0.292893C11.4191 0.105357 11.1647 0 10.8995 0H5.10051ZM8.75 3.75V4.5V8L8.75 8.75H7.25V8V4.5V3.75H8.75ZM8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",
                      fill: "currentColor"
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                      lineNumber: 162,
                      columnNumber: 15
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                  lineNumber: 154,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV("label", { className: "ml-1", htmlFor: "error", children: error }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                lineNumber: 169,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
            lineNumber: 150,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, true, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this);
    },
    "emlennUtwXNg/+Q6ZCJDDuhxgKE="
  )
), "emlennUtwXNg/+Q6ZCJDDuhxgKE=");
_c2 = Input;
Input.displayName = "Input";
const HideApiKey = _s2(React.forwardRef(_c3 = _s2(
  ({ className, ...props }, ref) => {
    _s2();
    const [showPassword, setShowPassword] = React.useState(false);
    return /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV(
        Input,
        {
          type: showPassword ? "text" : "password",
          iclassName: "hide-password-toggle",
          className,
          ref,
          ...props
        },
        void 0,
        false,
        {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
          lineNumber: 189,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          type: "button",
          className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
          onClick: () => setShowPassword((prev) => !prev),
          disabled: props.disabled,
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-background w-4 h-4" }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                lineNumber: 205,
                columnNumber: 11
              }, this),
              showPassword ? /* @__PURE__ */ jsxDEV(EyeOpenIcon, { className: "h-4 w-4 bg-background", "aria-hidden": "true" }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                lineNumber: 207,
                columnNumber: 13
              }, this) : /* @__PURE__ */ jsxDEV(
                EyeClosedIcon,
                {
                  className: "h-4 w-4 bg-background",
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
                  lineNumber: 209,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
              lineNumber: 204,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: showPassword ? "Hide password" : "Show password" }, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
              lineNumber: 215,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
          lineNumber: 196,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("style", { children: `
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				` }, void 0, false, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
        lineNumber: 221,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this);
  },
  "daguiRHWMFkqPgCh/ppD7CF5VuQ="
)), "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c4 = HideApiKey;
HideApiKey.displayName = "HideApiKey";
export { Input, HideApiKey };
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "Input$React.forwardRef");
$RefreshReg$(_c2, "Input");
$RefreshReg$(_c3, "HideApiKey$React.forwardRef");
$RefreshReg$(_c4, "HideApiKey");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/components/ui/input.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
