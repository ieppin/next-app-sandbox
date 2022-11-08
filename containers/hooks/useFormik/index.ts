import { get } from "dot-prop"
import { FormikConfig, useFormik } from "formik"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { ControlledCheck, ControlledDate, ControlledText } from "../../../components/types/control"

/** useFormikExでhandleSubmitに渡す関数の型です。 */
export type SubmitHandler<T> = (values: T) => void
/**
 * useFormikの拡張関数です。下記の機能が追加されています。
 * ・MUIを制御コンポーネントにするcontrol関数の追加
 * ・onClickイベントをラップしてsubmit発火させるhandleSubmit関数の追加
 * @param config {@link useFormik}のコンフィギュレーション、onSubmitのみ内部制御用につぶしている
 * @returns Formを処理するための値、ハンドラー
 */
export const useFormikEx = <T extends FieldValues = FieldValues>(config: Omit<FormikConfig<T>, 'onSubmit' | 'validateOnBlur' | 'validateOnChange'>) => {
  // クリックイベントの受け渡し用
  const [eventFn, setEventFn] = useState<{ fn: SubmitHandler<T> }>()

  const {
    values,
    handleBlur,
    handleChange,
    submitForm,
    errors,
    isValid,
    touched,
    dirty,
    setFieldValue,
    setValues,
    setFieldTouched,
    resetForm,
    status,
    setStatus,
  } = useFormik<T>({
    ...config,
    onSubmit: (values) => {
      // 保存されているイベントを呼び出し
      if (eventFn?.fn) {
        eventFn.fn(values)
        // イベントをクリア
        setEventFn(undefined)
      }
    },
    validateOnBlur: false,
    validateOnChange: false,
  })

  // バリデーションエラーがある場合はメッセージをポップ
  useEffect(() => {
    if (status === 'eventEnd' && !isValid) {
      toast.error('入力内容にエラーがあります。')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, isValid])

  const control: Control<T> = (name) => {
    const onBlur = handleBlur
    const value = get(values, name)
    const error = Boolean(get(errors, name))
    const message = get(errors, name)
    return {
      text: () => ({
        name, value, onBlur,
        onChange: handleChange,
        error, message,
      }),
      check: () => ({
        name,
        checked: !!value,
        onBlur,
        onChange: handleChange,
        error, message,
      }),
      date: () => ({
        name, value, onBlur,
        onChange: (data) => setFieldValue(name, data),
        error, message,
      })
    }
  }

  return {
    /**
     * MUIコンポーネントを制御するためのプロパティ群を返します。 
     * @param name フォームのプロパティ名
     * @returns 制御プロパティ群
     */
    control: control,
    /**
     * 任意のイベントをラップしてFormのsubmitと連動するためのハンドラー関数です。
     * @param handler フォーム内容が有効な場合に呼ばれるハンドラー
     * @returns ラップしたイベントハンドラー関数
     */
    handleSubmit: (handler: SubmitHandler<T>) => {
      return async () => {
        setStatus('eventStart')
        // イベントを保存
        setEventFn({ fn: handler })
        // submitしてFormikのonSubmitに制御を戻す
        await submitForm()
        setStatus('eventEnd')
      }
    },
    values: values,
    isValid: isValid,
    errors: errors,
    touched: touched,
    setValues: setValues,
    setFieldValue: setFieldValue,
    setFieldTouched: setFieldTouched,
    /**
     * フォームの値がinitialValuesから変更されたかどうかです。
     * setValuesではリセットされないのでresetFormを使ってください。
     */
    dirty: dirty,
    /** フォームの状態をリセットします。 */
    resetForm: resetForm,
  }
}

export declare type Control<TObject extends FieldValues> = <TPath extends FieldPath<TObject> = FieldPath<TObject>>(name: TPath) => {
  text: () => ControlledText
  check: () => ControlledCheck
  date: () => ControlledDate
}

// 以下のtypeはReact Hook Formから移植したもの
export declare type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;
declare type PathImpl<K extends string | number, V> = V extends Primitive ? `${K}` : `${K}` | `${K}.${Path<V>}`;
export declare type Primitive = null | undefined | string | number | boolean | symbol | bigint;
export declare type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;
export declare type ArrayKey = number;
export declare type FieldValues = Record<string, any>;
export declare type Path<T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
  [K in TupleKeys<T>]-?: PathImpl<K & string, T[K]>;
}[TupleKeys<T>] : PathImpl<ArrayKey, V> : {
  [K in keyof T]-?: PathImpl<K & string, T[K]>;
}[keyof T];
export declare type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;

export default useFormikEx