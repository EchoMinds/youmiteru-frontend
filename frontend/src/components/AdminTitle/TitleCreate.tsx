import { Create, SimpleForm, TextInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export const TitleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput
                source="name"
                fullWidth={true}
                style={{ width: "20%" }}
            />
            <RichTextInput toolbar={<></>} source="description" />
            <TextInput
                source="titleImageUrl"
                label="Image URL"
                fullWidth={true}
                style={{ width: "40%" }}
            />
        </SimpleForm>
    </Create>
);

export default TitleCreate;
