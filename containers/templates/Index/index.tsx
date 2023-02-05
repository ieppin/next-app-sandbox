import { FC } from "react"
import IndexComponents from "../../../components/templates/Index"
import { useMessage1Service, useMessage2Service } from "../../hooks/useMessage"

type Props = {}
const IndexContainer: FC<Props> = () => {
  const { data: message1 } = useMessage1Service()
  const { data: message2 } = useMessage2Service()

  return <IndexComponents
    message1={message1?.message}
    message2={message2?.message}
  />
}
export default IndexContainer