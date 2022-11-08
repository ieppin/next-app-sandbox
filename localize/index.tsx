import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode
}
/**
 * MUI-XのLocalizationProviderをアプリケーション向けに特化したコンポーネントです。
 * @param props プロパティ
 * @returns MUI-XのDatePickerに関するローカライズを行う関数コンポーネント
 */
const AppLocalizationProvider: FC<Props> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  )
}
export default AppLocalizationProvider