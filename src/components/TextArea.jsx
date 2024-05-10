import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";

export default function TextArea() {
  return (
    <FormControl>
      <FormLabel>Habar</FormLabel>
      <Textarea placeholder="Habar matni" minRows={6} />
    </FormControl>
  );
}
