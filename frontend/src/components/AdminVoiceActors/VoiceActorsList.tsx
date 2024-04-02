import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from "react-admin";

export const VoiceActorsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="userId" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
