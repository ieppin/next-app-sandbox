import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { FC, MouseEventHandler } from "react";
import { ControlledDate, ControlledText } from "../../types/control";

type Props = {
  value1: ControlledText
  value2: ControlledText
  value3: ControlledDate
  wb0101000: MouseEventHandler
}
/**
 * WB0101のコンポーネントを返すFC関数です。
 * @returns WB0101のコンポーネント
 */
const Wb0101: FC<Props> = (props) => {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>入力フォーム</Typography>
        <Typography variant="body2" color="dimgray">必要事項を入力して[OK]ボタンをクリックしてください。</Typography>
        <Stack maxWidth="md" spacing={3}>
          {/* 値1 */}
          <TextField
            fullWidth
            label="テキスト入力"
            placeholder="何らかのテキストを入力します"
            {...props.value1}
            helperText={props.value1.message}
          />
          {/* 値2 */}
          <FormControl>
            <InputLabel id="value2">値の選択</InputLabel>
            <Select
              fullWidth
              label="値の選択"
              labelId="value2"
              {...props.value2}
            >
              <MenuItem value="">&nbsp;</MenuItem>
              <MenuItem value="1">選択肢1</MenuItem>
              <MenuItem value="2">選択肢2</MenuItem>
              <MenuItem value="3">選択肢3</MenuItem>
            </Select>
            <FormHelperText error={props.value2.error}>{props.value2.message}</FormHelperText>
          </FormControl>
          {/* 値3 */}
          <FormControl>
            <DatePicker
              mask="____/__/__"
              label="日付の入力"
              {...props.value3}
              renderInput={(params) =>
                <TextField
                  {...params}
                  onBlur={props.value3.onBlur}
                  error={props.value3.error}
                  helperText={props.value3.message} />}
            />
          </FormControl>
          <Box textAlign="right">
            <Button
              variant="contained"
              onClick={props.wb0101000}
            >
              OK
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
export default Wb0101