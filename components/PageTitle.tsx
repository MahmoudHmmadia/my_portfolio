import React from "react";

function PageTitle({ content }: { content: string }) {
  return (
    <h1 className="cool-title text-center gradient-text sm:text-5xl text-3xl font-extrabold uppercase">
      {content}
    </h1>
  );
}

export default PageTitle;
