import { Fragment, useEffect, useState, createElement } from "react";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkBreaks from "remark-breaks";

import TextArea from "./TextArea";
import PreviewArea from "./PreviewArea";
import "./MainNew.css";

export default function Main() {
  const [unparsed, setUnparsed] = useState("");
  const [parsed, setParsed] = useState("");

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkBreaks)
      .use(remarkRehype) // parse Rehype if toHTML
      .use(rehypeReact, { createElement, Fragment })
      .process(unparsed) // can be toHTML with discord-markdown
      .then((file) => setParsed(file.result));
  }, [unparsed]);

  return (
    <div className="main">
      <TextArea onEdit={(e) => setUnparsed(e.target.value)} edit={unparsed} />
      <PreviewArea content={parsed} />
    </div>
  );
}
