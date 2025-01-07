import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReTweetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="originalTweet" source="originalTweet" />
        <TextInput label="retweeter" source="retweeter" />
      </SimpleForm>
    </Create>
  );
};
