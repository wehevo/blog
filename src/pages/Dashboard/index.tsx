import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { styled } from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import ShapeButton from "@/components/UI/ShapeButton";
import { firestore } from "@/utils/firebase";

const DashboardPage = () => {
  const editorRef = useRef<any>(null);
  const checkRef = useRef<any>(null);
  const titleRef = useRef<any>(null);
  const descRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const dateRef = useRef<any>(null);
  const navigate = useNavigate();
  const log = () => {
    console.log(dateRef.current.value);
    if (editorRef.current) {
      console.log(editorRef?.current?.getContent());
    }
  };
  const onPost = () => {
    if(titleRef.current?.value === "" || descRef.current?.value === "" || imageRef.current?.value === "" || dateRef.current?.value === "" || editorRef?.current?.getContent() === "") {
      alert("Please fill all the fields");
      return;
    }
    const bucket = firestore.collection("blog");

    if(checkRef.current?.checked) {
      bucket.doc("post").set({
        title: titleRef.current?.value,
        description: descRef.current?.value,
        image: imageRef.current?.value,
        date: dateRef.current?.value,
        content: editorRef?.current?.getContent()
      });
    }
    else{
      bucket.add({
        title: titleRef.current?.value,
        description: descRef.current?.value,
        image: imageRef.current?.value,
        date: dateRef.current?.value,
        content: editorRef?.current?.getContent()
      }).then((docRef) => {
        alert("Post added successfully, ID: " + docRef.id);
      });

    }
  }
  const onClose = () => {
    navigate("/blog")
  }

  return (
    <div className="md:px-8 px-2 pt-4">
      <button onClick={onClose} className="absolute right-8">
        <RiCloseCircleLine size={32} />
      </button>
      <div className="mb-4 pt-7">
        <span>Featured Post</span>
        <input ref={checkRef} type="checkbox" className=" ml-4 scale-125" />
      </div>
      <div className="mb-4">
        <label className="text-xl">
          Title
          <span className="text-red-500">*</span>
        </label>
        <StyledInput
          ref={titleRef}
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
          ref={descRef}
          type="text"
          name="description"
          id="description"
          placeholder=""
          required
          className="md:mb-0 mb-4 bg-transparent border w-full border-current px-0 py-3 pl-3 focus:border-blue-600 focus:outline-none rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="text-xl">Image</label>
        <StyledInput
          ref={imageRef}
          type="text"
          name="image"
          id="image"
          placeholder=""
          required
          className="md:mb-0 mb-4 bg-transparent border w-full border-current px-0 py-3 pl-3 focus:border-blue-600 focus:outline-none rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="text-xl">Date</label>
        <StyledInput
          ref={dateRef}
          type="date"
          name="date"
          id="date"
          placeholder="24 May 2024"
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
      {/* <button className="mt-4 mb-8 border border-current" onClick={log}>Submit</button> */}
      <div className="my-6 w-full flex justify-center">
        <ShapeButton name={"Post"} onClickHandler={onPost} />
      </div>
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
