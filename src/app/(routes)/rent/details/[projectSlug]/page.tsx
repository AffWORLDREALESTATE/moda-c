"use client";
import DetailPage from "@/src/view/rent/detailPage";
import { useParams } from "next/navigation";
import React from "react";

function RentDetails() {
  const { projectSlug } = useParams();

  return (
    <div>
        <DetailPage slug={projectSlug as string} />
    </div>
  );
}

export default RentDetails;

