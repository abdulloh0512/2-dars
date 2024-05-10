import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Autocomplete from "@mui/joy/Autocomplete";

const options = [];

export default function Option() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <FormControl id="controllable-states-demo">
        <FormLabel>Shablon</FormLabel>
        <Autocomplete
          placeholder="Shablon"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={options}
          
        />
      </FormControl>
    </div>
  );
}
