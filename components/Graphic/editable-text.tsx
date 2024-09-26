import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

interface PropType {
  defaultText: string;
  textClassName?: string;
}

function EditabelText(props: PropType) {
  const { defaultText, textClassName } = props;

  const [text, setText] = useState(defaultText);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex justify-center align-middle w-full">
      {!editMode ? (
        <Button
          className="w-auto"
          variant="light"
          onClick={() => setEditMode(true)}
        >
          <h1 className={textClassName}>{text}</h1>
        </Button>
      ) : (
        <Input
          className="w-auto"
          defaultValue={text}
          onValueChange={(value) => setText(value)}
          onKeyDown={(key) => {
            if (key.key == "Enter") {
              setEditMode(false);
            }
          }}
        />
      )}
    </div>
  );
}

export default EditabelText;
