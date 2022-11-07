import { Paper } from "@mui/material";
import { FC } from "react";

type Props = {
}
/**
 * WB0101のコンポーネントを返すFC関数です。
 * @returns WB0101のコンポーネント
 */
const Wb0101: FC<Props> = () => {
  return (
    <>
      <Paper sx={{ p: 3 }}>
        {[...new Array(50)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </Paper>
    </>
  )
}
export default Wb0101