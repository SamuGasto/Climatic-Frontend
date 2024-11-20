"use client";
import React from "react";
import ButtonExportBoard from "./export-board-button";
import ButtonImportBoard from "./import-board-button";

function OptionImportExport() {
  return (
    <div className="flex flex-row justify-center gap-2">
      <ButtonExportBoard />
      <ButtonImportBoard />
    </div>
  );
}

export default OptionImportExport;
