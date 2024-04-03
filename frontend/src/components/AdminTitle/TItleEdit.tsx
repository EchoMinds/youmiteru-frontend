import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    ArrayInput,
    SimpleFormIterator,
    SelectInput,
} from "react-admin";
import { useParams } from "react-router-dom";
import { RichTextInput } from "ra-input-rich-text";
import { genre } from "@/constants/genre";

export const TitleEdit = () => {
    const { id } = useParams();

    return (
        <Edit title="Edit Title" id={id}>
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
        </Edit>
    );
};
