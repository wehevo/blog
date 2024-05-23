import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { styled } from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const editorRef = useRef<any>(null);
  const navigate = useNavigate();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef?.current?.getContent());
    }
  };
  const onClose = () => {
    navigate("/blog")
  }

  return (
    <div className="md:px-8 px-2 pt-4">
      <button onClick={onClose} className="absolute right-8">
        <RiCloseCircleLine size={32} />
      </button>
      <div className="mb-4 pt-7">
        <label className="text-xl">
          Title
          <span className="text-red-500">*</span>
        </label>
        <StyledInput
          type="text"
          name="title"
          id="title"
          placeholder=""
          required
          className="md:mb-0 mb-4 bg-transparent border w-full border-current px-0 py-3 pl-3 focus:border-blue-600 focus:outline-none rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="text-xl">Description</label>
        <StyledInput
          type="text"
          name="description"
          id="description"
          placeholder=""
          required
          className="md:mb-0 mb-4 bg-transparent border w-full border-current px-0 py-3 pl-3 focus:border-blue-600 focus:outline-none rounded-lg"
        />
      </div>
      <Editor
        // ref={editorRef}
        onInit={(_evt, editor) => (editorRef.current = editor)}
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
    </div>
  );
};

export default DashboardPage;

const StyledInput = styled.input`
  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 500px ${({ theme }) => theme.backgroundColor}
      inset !important;
    box-shadow: 0 0 0 500px ${({ theme }) => theme.backgroundColor} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.textColor};
  }
  color: ${({ theme }) => theme.textColor};
`;
