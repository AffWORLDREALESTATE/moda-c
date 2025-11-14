"use client";
import DetailPage from "@/src/view/offPlans/detailPage";
import { useParams } from "next/navigation";
import React from "react";

function OffPlaneDetails() {
  const { projectSlug } = useParams();
  return <div>
    <DetailPage slug={projectSlug as string} />
  </div>;
}

export default OffPlaneDetails;

