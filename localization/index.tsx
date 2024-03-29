import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ja";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode
}
/**
 * MUI-XのLocalizationProviderをアプリケーション向けに特化したコンポーネントです。
 * @param props プロパティ
 * @returns MUI-XのDatePickerに関するローカライズを行う関数コンポーネント
 */
const AppL10nProvider: FC<Props> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
      {children}
    </LocalizationProvider>
  )
}
export default AppL10nProvider