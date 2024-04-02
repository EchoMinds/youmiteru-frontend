import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { useParams } from "react-router-dom";

export const TitleEdit = () => {
    const { id } = useParams();

    return (
        <Edit title="Edit Title" id={id}>
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    );
};
