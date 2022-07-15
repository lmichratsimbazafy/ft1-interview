export const cutText = (text: string, length: number = 20) =>
  text.length > length ? `${text.substring(0, 20)} ...` : text;
