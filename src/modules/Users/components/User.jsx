import React from 'react'
import Header from "../../../components/Header"
import { useTranslation } from "react-i18next";

export default function User() {
  const { t } = useTranslation();

  return (
    <div><Header title={t("Users")} /></div>
  )
}
