import React from "react";
import {
    ArrayInput,
    Create,
    ImageField,
    ImageInput,
    SelectInput,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    FormDataConsumer, // Імпорт компонента для роботи з даними форми
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { genre } from "@/constants/genre";

export const TitleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <RichTextInput toolbar={<></>} source="description" />
            <ImageInput source="picture" label="Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ArrayInput source="genre">
                <SimpleFormIterator>
                    <SelectInput
                        source="name"
                        choices={genre}
                        optionText="name"
                        optionValue="originalName"
                    />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export default TitleCreate;
