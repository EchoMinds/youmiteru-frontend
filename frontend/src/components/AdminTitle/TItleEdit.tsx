import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { useParams } from "react-router-dom";
import { RichTextInput } from "ra-input-rich-text";

export const TitleEdit = () => {
    const { id } = useParams();

    return (
        <Edit title="Edit Title" id={id}>
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
        </Edit>
    );
};
