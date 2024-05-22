import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const DashboardPage = () => {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef?.current?.getContent());
    }
  };
  return (
    <>
      <Editor
        // ref={editorRef}
        onInit={(_evt, editor) => editorRef.current = editor}
        apiKey="68tlxf3xai0i8o13dqhwgtbn5vsgxpj78c8frbchvqkthbw3"
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" }
          ],
          ai_request: (request: any, respondWith: any) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            )
        }}
        initialValue="Welcome to TinyMCE!"
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default DashboardPage;
