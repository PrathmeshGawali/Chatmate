import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/content.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--58822b58.js"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s2 = $RefreshSig$(), _s6 = $RefreshSig$();
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--58822b58.js"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"];
import { Button } from "/src/components/ui/button.tsx.js";
import {
  Bot,
  EllipsisVertical,
  Eraser,
  Send,
  Settings
} from "/vendor/.vite-deps-lucide-react.js__v--58822b58.js";
import { Input } from "/src/components/ui/input.tsx.js";
import { SYSTEM_PROMPT } from "/src/constants/prompt.ts.js";
import { extractCode } from "/src/content/util.ts.js";
import { cn } from "/src/lib/utils.ts.js";
import { Card, CardContent, CardFooter } from "/src/components/ui/card.tsx.js";
import { ModalService } from "/src/services/ModalService.ts.js";
import { useChromeStorage } from "/src/hooks/useChromeStorage.ts.js";
import { parseChatHistory } from "/src/interface/chatHistory.ts.js";
import { VALID_MODELS } from "/src/constants/valid_modals.ts.js";
import { ScrollArea } from "/src/components/ui/scroll-area.tsx.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from "/src/components/ui/select.tsx.js";
import { LIMIT_VALUE } from "/src/lib/indexedDB.ts.js";
import { useIndexDB } from "/src/hooks/useIndexDB.tsx.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "/src/components/ui/dropdown-menu.tsx.js";
const ChatBox = ({
  context,
  visible,
  model,
  apikey,
  heandelModel,
  selectedModel
}) => {
  _s2();
  var _s = $RefreshSig$();
  const [value, setValue] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState([]);
  const [priviousChatHistory, setPreviousChatHistory] = React.useState(
    []
  );
  const [isResponseLoading, setIsResponseLoading] = React.useState(false);
  const scrollAreaRef = useRef(null);
  const lastMessageRef = useRef(null);
  const [offset, setOffset] = React.useState(0);
  const [totalMessages, setTotalMessages] = React.useState(0);
  const [isPriviousMsgLoading, setIsPriviousMsgLoading] = React.useState(false);
  const { fetchChatHistory, saveChatHistory } = useIndexDB();
  const getProblemName = () => {
    const url = window.location.href;
    const match = /\/problems\/([^/]+)/.exec(url);
    return match ? match[1] : "Unknown Problem";
  };
  const problemName = getProblemName();
  const inputFieldRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current && !isPriviousMsgLoading) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      inputFieldRef.current?.focus();
    }, 0);
  }, [chatHistory, isResponseLoading, visible]);
  const heandelClearChat = async () => {
    _s();
    const { clearChatHistory } = useIndexDB();
    await clearChatHistory(problemName);
    setChatHistory([]);
    setPreviousChatHistory([]);
  };
  _s(heandelClearChat, "vPbtnN7s5xAnWRSKnsSJeX6UU08=", false, function() {
    return [useIndexDB];
  });
  const handleGenerateAIResponse = async () => {
    const modalService = new ModalService();
    modalService.selectModal(model, apikey);
    let programmingLanguage = "UNKNOWN";
    const changeLanguageButton = document.querySelector(
      "button.rounded.items-center.whitespace-nowrap.inline-flex.bg-transparent.dark\\:bg-dark-transparent.text-text-secondary.group"
    );
    if (changeLanguageButton) {
      if (changeLanguageButton.textContent)
        programmingLanguage = changeLanguageButton.textContent;
    }
    const userCurrentCodeContainer = document.querySelectorAll(".view-line");
    const extractedCode = extractCode(userCurrentCodeContainer);
    const systemPromptModified = SYSTEM_PROMPT.replace(
      /{{website_content}}/gi,
      context.website_content
    ).replace(/{{website_topic}}/g, programmingLanguage).replace(/{{user_query}}/g, extractedCode);
    const PCH = parseChatHistory(chatHistory);
    const { error, success } = await modalService.generate({
      prompt: `${value}`,
      systemPrompt: systemPromptModified,
      messages: PCH,
      extractedCode
    });
    if (error) {
      const errorMessage = {
        role: "assistant",
        content: error.message
      };
      await saveChatHistory(
        problemName,
        [
          ...priviousChatHistory,
          { role: "user", content: value },
          errorMessage
        ]
      );
      setPreviousChatHistory((prev) => [...prev, errorMessage]);
      setChatHistory((prev) => {
        const updatedChatHistory = [...prev, errorMessage];
        return updatedChatHistory;
      });
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (success) {
      const res = {
        role: "assistant",
        content: success
      };
      await saveChatHistory(
        problemName,
        [
          ...priviousChatHistory,
          { role: "user", content: value },
          res
        ]
      );
      setPreviousChatHistory((prev) => [...prev, res]);
      setChatHistory((prev) => [...prev, res]);
      setValue("");
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setIsResponseLoading(false);
    setTimeout(() => {
      inputFieldRef.current?.focus();
    }, 0);
  };
  const loadInitialChatHistory = async () => {
    const { totalMessageCount, chatHistory: chatHistory2, allChatHistory } = await fetchChatHistory(problemName, LIMIT_VALUE, 0);
    setPreviousChatHistory(allChatHistory || []);
    setTotalMessages(totalMessageCount);
    setChatHistory(chatHistory2);
    setOffset(LIMIT_VALUE);
  };
  useEffect(() => {
    loadInitialChatHistory();
  }, [problemName]);
  const loadMoreMessages = async () => {
    if (totalMessages < offset) {
      return;
    }
    setIsPriviousMsgLoading(true);
    const { chatHistory: moreMessages } = await fetchChatHistory(
      problemName,
      LIMIT_VALUE,
      offset
    );
    if (moreMessages.length > 0) {
      setChatHistory((prev) => [...moreMessages, ...prev]);
      setOffset((prevOffset) => prevOffset + LIMIT_VALUE);
    }
    setTimeout(() => {
      setIsPriviousMsgLoading(false);
    }, 500);
  };
  const handleScroll = (e) => {
    const target = e.currentTarget;
    if (target.scrollTop === 0) {
      console.log("Reached the top, loading more messages...");
      loadMoreMessages();
    }
  };
  const onSendMessage = async (value2) => {
    setIsResponseLoading(true);
    const newMessage = { role: "user", content: value2 };
    setPreviousChatHistory((prev) => {
      return [...prev, newMessage];
    });
    setChatHistory([...chatHistory, newMessage]);
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    handleGenerateAIResponse();
  };
  if (!visible) return /* @__PURE__ */ jsxDEV(Fragment, {}, void 0, false, {
    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
    lineNumber: 269,
    columnNumber: 24
  }, this);
  return /* @__PURE__ */ jsxDEV(Card, { className: "mb-2", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 items-center justify-between h-20 rounded-t-lg p-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2 items-center justify-start", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-full p-2", children: /* @__PURE__ */ jsxDEV(Bot, { color: "#000", className: "h-6 w-6" }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 276,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-lg", children: "Need Help?" }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 280,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("h6", { className: "font-normal text-xs", children: "Always online" }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 281,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(DropdownMenu, { children: [
        /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxDEV(Button, { variant: "tertiary", size: "icon", children: /* @__PURE__ */ jsxDEV(EllipsisVertical, { size: 18 }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 287,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 286,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 285,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(DropdownMenuContent, { className: "w-56", children: [
          /* @__PURE__ */ jsxDEV(DropdownMenuLabel, { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV(Settings, { size: 16, strokeWidth: 1.5, className: "mr-2" }, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 292,
              columnNumber: 15
            }, this),
            " ",
            VALID_MODELS.find((model2) => model2.name === selectedModel)?.display
          ] }, void 0, true, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuSeparator, {}, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 298,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuGroup, { children: /* @__PURE__ */ jsxDEV(DropdownMenuSub, { children: [
            /* @__PURE__ */ jsxDEV(DropdownMenuSubTrigger, { children: [
              /* @__PURE__ */ jsxDEV(Bot, { size: 16, strokeWidth: 1.5 }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 302,
                columnNumber: 19
              }, this),
              " Change Model"
            ] }, void 0, true, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 301,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(DropdownMenuPortal, { children: /* @__PURE__ */ jsxDEV(DropdownMenuSubContent, { children: /* @__PURE__ */ jsxDEV(
              DropdownMenuRadioGroup,
              {
                value: selectedModel,
                onValueChange: (v) => heandelModel(v),
                children: VALID_MODELS.map(
                  (modelOption) => /* @__PURE__ */ jsxDEV(
                    DropdownMenuRadioItem,
                    {
                      value: modelOption.name,
                      children: modelOption.display
                    },
                    modelOption.name,
                    false,
                    {
                      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                      lineNumber: 311,
                      columnNumber: 23
                    },
                    this
                  )
                )
              },
              void 0,
              false,
              {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 306,
                columnNumber: 21
              },
              this
            ) }, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 305,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 299,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(DropdownMenuSeparator, {}, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 323,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV(
            DropdownMenuItem,
            {
              onClick: heandelClearChat,
              onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "rgb(185 28 28 / 0.35)",
              onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "",
              children: [
                /* @__PURE__ */ jsxDEV(Eraser, { size: 14, strokeWidth: 1.5 }, void 0, false, {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                  lineNumber: 332,
                  columnNumber: 15
                }, this),
                " Clear Chat"
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 324,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 290,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
        lineNumber: 284,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
      lineNumber: 274,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CardContent, { className: "p-2", children: chatHistory.length > 0 ? /* @__PURE__ */ jsxDEV(
      ScrollArea,
      {
        className: "space-y-4 h-[500px] w-[400px] p-2",
        ref: scrollAreaRef,
        onScroll: handleScroll,
        children: [
          totalMessages > offset && /* @__PURE__ */ jsxDEV("div", { className: "flex w-full items-center justify-center", children: /* @__PURE__ */ jsxDEV(
            Button,
            {
              className: "text-sm p-1 m-x-auto bg-transpernent text-white hover:bg-transpernent",
              onClick: loadMoreMessages,
              children: "Load Previous Messages"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 346,
              columnNumber: 17
            },
            this
          ) }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 345,
            columnNumber: 11
          }, this),
          chatHistory.map(
            (message, index) => /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: cn(
                  "flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm my-4",
                  message.role === "user" ? "ml-auto bg-primary text-primary-foreground rounded-bl-lg rounded-tl-lg rounded-tr-lg " : "bg-muted rounded-br-lg rounded-tl-lg rounded-tr-lg"
                ),
                children: /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV("p", { className: "max-w-80", children: typeof message.content === "string" ? message.content : message.content.feedback }, void 0, false, {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                  lineNumber: 365,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                  lineNumber: 364,
                  columnNumber: 17
                }, this)
              },
              index,
              false,
              {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 355,
                columnNumber: 11
              },
              this
            )
          ),
          isResponseLoading && /* @__PURE__ */ jsxDEV("div", { className: "flex w-max max-w-[75%] flex-col my-2", children: /* @__PURE__ */ jsxDEV("div", { className: "w-5 h-5 rounded-full animate-pulse bg-primary" }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 375,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 374,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("div", { ref: lastMessageRef }, void 0, false, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 378,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
        lineNumber: 339,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("p", { className: "flex items-center justify-center h-[510px] w-[400px] text-center space-y-4", children: "No messages yet." }, void 0, false, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
      lineNumber: 382,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
      lineNumber: 381,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
      lineNumber: 337,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(CardFooter, { children: /* @__PURE__ */ jsxDEV(
      "form",
      {
        onSubmit: (event) => {
          event.preventDefault();
          if (value.trim().length === 0) return;
          onSendMessage(value);
          setValue("");
        },
        className: "flex w-full items-center space-x-2",
        children: [
          /* @__PURE__ */ jsxDEV(
            Input,
            {
              id: "message",
              placeholder: "Type your message...",
              className: "flex-1",
              autoComplete: "off",
              value,
              onChange: (event) => setValue(event.target.value),
              disabled: isResponseLoading,
              required: true,
              ref: inputFieldRef
            },
            void 0,
            false,
            {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 398,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              type: "submit",
              className: "bg-[#fafafa] rounded-lg text-black",
              size: "icon",
              disabled: value.length === 0,
              children: [
                /* @__PURE__ */ jsxDEV(Send, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                  lineNumber: 415,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Send" }, void 0, false, {
                  fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                  lineNumber: 416,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 409,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
        lineNumber: 389,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
      lineNumber: 388,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
    lineNumber: 272,
    columnNumber: 5
  }, this);
};
_s2(ChatBox, "uK1bflFIWz6UebbRh/DdK1dT9h8=", false, function() {
  return [useIndexDB];
});
_c = ChatBox;
const ContentPage = () => {
  _s6();
  var _s3 = $RefreshSig$(), _s4 = $RefreshSig$();
  const [chatboxExpanded, setChatboxExpanded] = React.useState(false);
  const metaDescriptionEl = document.querySelector("meta[name=description]");
  const website_content = metaDescriptionEl?.getAttribute("content");
  const [modal, setModal] = React.useState(null);
  const [apiKey, setApiKey] = React.useState(null);
  const [selectedModel, setSelectedModel] = React.useState();
  const ref = useRef(null);
  const handleDocumentClick = (e) => {
    if (ref.current && e.target instanceof Node && !ref.current.contains(e.target)) {
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  _s3(async () => {
    _s3();
    const { getKeyModel, selectModel } = useChromeStorage();
    const { model, apiKey: apiKey2 } = await getKeyModel(await selectModel());
    setModal(model);
    setApiKey(apiKey2);
  }, "XKCJsPKD/JtE6ga6ALet7zU8Zhs=", false, function() {
    return [useChromeStorage];
  })();
  const heandelModel = (v) => {
    _s4();
    if (v) {
      const { setSelectModel } = useChromeStorage();
      setSelectModel(v);
      setSelectedModel(v);
    }
  };
  _s4(heandelModel, "WYe69PWYwSHlTCtnQ9vVABmDNrU=", false, function() {
    return [useChromeStorage];
  });
  React.useEffect(() => {
    var _s5 = $RefreshSig$();
    const loadChromeStorage = async () => {
      _s5();
      if (!chrome) return;
      const { selectModel } = useChromeStorage();
      setSelectedModel(await selectModel());
    };
    _s5(loadChromeStorage, "0bYl++IAIE8wYBEDp0KwzmMAarU=", false, function() {
      return [useChromeStorage];
    });
    loadChromeStorage();
  }, []);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      ref,
      className: "dark z-2147483647 cursor-pointer",
      style: {
        position: "fixed",
        bottom: "30px",
        right: "30px"
      },
      children: [
        !modal || !apiKey ? !chatboxExpanded ? null : /* @__PURE__ */ jsxDEV(Fragment, { children: /* @__PURE__ */ jsxDEV(Card, { className: "mb-5", children: /* @__PURE__ */ jsxDEV(CardContent, { className: "h-[500px] grid place-items-center", children: /* @__PURE__ */ jsxDEV("div", { className: "grid place-items-center gap-4", children: [
          !selectedModel && /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-center", children: "Please configure the extension before using this feature." }, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 498,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                onClick: () => {
                  chrome.runtime.sendMessage({ action: "openPopup" });
                },
                children: "configure"
              },
              void 0,
              false,
              {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 502,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 497,
            columnNumber: 15
          }, this),
          selectedModel && /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "We couldn't find any API key for selected model",
              " ",
              /* @__PURE__ */ jsxDEV("b", { children: /* @__PURE__ */ jsxDEV("u", { children: selectedModel }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 516,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 515,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 513,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("p", { children: "you can select another models" }, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 519,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV(
              Select,
              {
                onValueChange: (v) => heandelModel(v),
                value: selectedModel,
                children: [
                  /* @__PURE__ */ jsxDEV(SelectTrigger, { className: "w-56", children: /* @__PURE__ */ jsxDEV(SelectValue, { placeholder: "Select a model" }, void 0, false, {
                    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                    lineNumber: 525,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                    lineNumber: 524,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV(SelectContent, { children: /* @__PURE__ */ jsxDEV(SelectGroup, { children: [
                    /* @__PURE__ */ jsxDEV(SelectLabel, { children: "Model" }, void 0, false, {
                      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                      lineNumber: 529,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ jsxDEV(SelectSeparator, {}, void 0, false, {
                      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                      lineNumber: 530,
                      columnNumber: 29
                    }, this),
                    VALID_MODELS.map(
                      (modelOption) => /* @__PURE__ */ jsxDEV(
                        SelectItem,
                        {
                          value: modelOption.name,
                          children: modelOption.display
                        },
                        modelOption.name,
                        false,
                        {
                          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                          lineNumber: 532,
                          columnNumber: 23
                        },
                        this
                      )
                    )
                  ] }, void 0, true, {
                    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                    lineNumber: 528,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                    lineNumber: 527,
                    columnNumber: 25
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
                lineNumber: 520,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 512,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 495,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 494,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 493,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 492,
          columnNumber: 7
        }, this) : /* @__PURE__ */ jsxDEV(
          ChatBox,
          {
            visible: chatboxExpanded,
            context: { website_content },
            model: modal,
            apikey: apiKey,
            heandelModel,
            selectedModel
          },
          void 0,
          false,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 550,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxDEV(
          Button,
          {
            size: "icon",
            onClick: () => setChatboxExpanded(!chatboxExpanded),
            children: /* @__PURE__ */ jsxDEV(Bot, {}, void 0, false, {
              fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
              lineNumber: 564,
              columnNumber: 11
            }, this)
          },
          void 0,
          false,
          {
            fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
            lineNumber: 560,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
          lineNumber: 559,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx",
      lineNumber: 481,
      columnNumber: 5
    },
    this
  );
};
_s6(ContentPage, "LyiTZ3ntHBFiOT28HVmmw+gFUqQ=");
_c2 = ContentPage;
export default ContentPage;
var _c, _c2;
$RefreshReg$(_c, "ChatBox");
$RefreshReg$(_c2, "ContentPage");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/devic/OneDrive/Desktop/Chrome/leetcode-whisper-chrome-extension/src/content/content.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
