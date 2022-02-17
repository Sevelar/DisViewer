import { useState, useEffect, createElement, Fragment } from "react";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkBreaks from "remark-breaks";

import TextArea from "./TextArea";
import PreviewArea from "./PreviewArea";
import css from "./Main.module.css";

export default function Main() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkBreaks)
      .use(remarkRehype)
      .use(rehypeReact, { createElement, Fragment })
      .process(input)
      .then((file) => setOutput(file.result));
  }, [input]);

  return (
    <div className={css.main}>
      <TextArea onChange={(e) => setInput(e.target.value)} value={input} />
      <PreviewArea value={output} />
    </div>
  );
}
