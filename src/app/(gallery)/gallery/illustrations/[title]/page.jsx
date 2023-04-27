import React from "react";
import IllustrationCard from "@/src/components/gallery-cards/illustration-card";
import { IllustrationConfig } from "@/src/config/illustration";
import Link from "next/link";

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
