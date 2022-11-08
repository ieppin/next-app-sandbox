type ControlledBase = {
  /** Formikと連携するための名前です。 */
  name: string
  /** コンポーネントからフォーカスが外れた場合に呼ばれるハンドラー関数です。 */
  onBlur?: {
    (e: React.FocusEvent<any>): void
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
  }
  /** コンポーネントの値が変更された場合に呼ばれるハンドラー関数です。 */
  onChange?: {
    (e: React.ChangeEvent<any>): void
    <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
  }
  /** バリデーションの結果エラーがあったかどうかです。 */
  error?: boolean
  /** バリデーション結果のメッセージです。 */
  message?: any
}

export type ControlledText = {
  /** テキストコンポーネントに表示する値です。 */
  value: unknown
} & ControlledBase

export type ControlledCheck = {
  /** チェックボックスやSwitchの状態です。 */
  checked: boolean
} & ControlledBase

export type ControlledDate = {
  /** DatePickerに表示する値です。 */
  value: unknown
  /** DatePickerの変更ハンドラーです。 */
  onChange: (data: any) => void
} & Omit<ControlledBase, 'onChange'>