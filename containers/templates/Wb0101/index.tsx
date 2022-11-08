import { Dayjs } from "dayjs";
import { FC } from "react";
import toast from "react-hot-toast";
import { object, string } from "yup";
import Wb0101 from "../../../components/templates/Wb0101";
import useFormikEx, { SubmitHandler } from "../../hooks/useFormik";

type Props = {
}
/**
 * WB0101のコンテナーを返すFC関数です。
 * @returns WB0101のコンテナー
 */
const Wb0101Container: FC<Props> = () => {
  const { control, handleSubmit } = useFormikEx<Wb0101Form>({
    // 初期値
    initialValues: { value1: '', value2: '', value3: null, value4: false, },
    // バリデーションスキーマ
    validationSchema: object({
      value1: string().required(),
      value2: string().required(),
      value3: object().nullable().required(),
    }),
    validateOnBlur: true,
  })

  const wb0101000: SubmitHandler<Wb0101Form> = (values) => {
    console.log('submitted form values', values)
    toast.success('フォームが送信されました。')
  }

  return (
    <Wb0101
      value1={control('value1').text()}
      value2={control('value2').text()}
      value3={control('value3').date()}
      value4={control('value4').check()}
      wb0101000={handleSubmit(wb0101000)}
    />
  )
}

type Wb0101Form = {
  value1: string
  value2: string
  value3: Dayjs | null
  value4: boolean
}
export default Wb0101Container