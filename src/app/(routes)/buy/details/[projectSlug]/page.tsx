"use client";
import DetailPage from "@/src/view/buy/detailPage";
import { useParams } from "next/navigation";
import React from "react";

function BuyDetails() {
  const { projectSlug } = useParams();

  return (
    <div>
        <DetailPage slug={projectSlug as string} />
    </div>
  );
}

export default BuyDetails;

