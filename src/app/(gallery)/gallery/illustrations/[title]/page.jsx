import React from "react";

const IllustrationSlugPage = ({ params }) => {
  return (
    <main className="container flex justify-center items-center">
      <div className="flex flex-col gap-12 h-full">
        <p className="h-[830px]">{params.title}</p>
      </div>
    </main>
  );
};

export default IllustrationSlugPage;
