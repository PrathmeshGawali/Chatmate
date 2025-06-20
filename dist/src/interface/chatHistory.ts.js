export const parseChatHistory = (chatHistory) => {
  return chatHistory.map((history) => {
    return {
      role: history.role,
      content: typeof history.content === "string" ? history.content : JSON.stringify(history.content)
    };
  });
};
