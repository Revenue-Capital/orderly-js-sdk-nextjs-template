import React from "react";
import { Metadata } from "next";
import { generatePageTitle } from "@/utils";
import SettingsView from "./view";
import { PageTitleMap, PathEnum } from "@/constant";

export const metadata: Metadata = {
  title: generatePageTitle(PageTitleMap[PathEnum.Setting]),
};

export default function SettingsPage() {
  return <SettingsView />;
}
