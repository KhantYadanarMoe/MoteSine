import { useEffect } from "react";

const TextEditor = ({ value, onChange }) => {
    useEffect(() => {
        tinymce.init({
            selector: "#my-editor",
            height: 300,
            menubar: false,
            plugins: "link image code",
            toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright",
            setup: function (editor) {
                editor.on("Change KeyUp", function () {
                    const content = editor.getContent();
                    onChange({ target: { name: "paragraph", value: content } });
                });
            },
        });

        return () => {
            if (tinymce.get("my-editor")) {
                tinymce.get("my-editor").remove();
            }
        };
    }, []);

    return (
        <textarea
            id="my-editor"
            defaultValue={value}
            className="w-full border border-gray-300 rounded-md p-2"
        />
    );
};

export default TextEditor;
