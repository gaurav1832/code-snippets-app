import { useState, useEffect } from "react";

const Card = ({ snippet }) => {
  const [copied, setCopied] = useState("");

  const handleCppyBtn = () => {
    setCopied(snippet.source_code);
    navigator.clipboard.writeText(snippet.source_code);
    setTimeout(() => {
      setCopied("");
    }, 1000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-slate-300">
              {snippet.username}
            </h3>
            {/* <p className="font-inter text-sm text-slate-400">
              {post.}
            </p> */}
          </div>
        </div>
        <div className="copy_btn" onClick={handleCppyBtn}>
          <img
            src={
              copied === snippet.source_code
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === snippet.source_code ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-300">
        {snippet.source_code}
      </p>
      {/* <p
        className="font-inter text-sm gptgreen cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p> */}

      {/* {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-5 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <span> | </span>
          <p
            className="font-inter text-sm text-red-500 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )} */}
    </div>
  );
};

export default Card;
