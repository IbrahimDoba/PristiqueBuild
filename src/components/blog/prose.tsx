import { cn } from "@/lib/utils";
import React from "react";

type ProseProps = React.HTMLAttributes<HTMLElement> & {
  as?: "article";
  html: string;
};

function Prose({ children, html, className }: ProseProps) {
  return (
    <article
      className={cn(
        "prose max-w-none prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:font-sans prose-headings:font-semibold",
        className
      )}
    >
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <> */}
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </article>
  );
}

export default Prose;
