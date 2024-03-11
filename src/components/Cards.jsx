import React from "react";

export const Cards = ({ data, handleDelete }) => {
  return (
    <>
      <div>
        {data.map((item, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              margin: 10,
              minWidth: 250,
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid #000000",
              padding: "5px",
            }}>
            <span>
              <b>Name:</b> {item.name}
            </span>
            <span>
              <b>Course: </b>
              {item.course}
            </span>
            <button onClick={() => handleDelete(key)}>
              <svg
                width="24"
                height="24"
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
