import React from "react";
import { Handle, Position } from "reactflow";

//custom text node
const TextNode = ({ data, selected }) => {
  return (
    <div
      className={`w-40  shadow-md rounded-md bg-white   ${
        selected ? "border-solid border-2 border-gray-400/100" : ""
      } `}
    >
      <div className="flex flex-col">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="max-h-max px-2 py-1 text-left text-black text-xs font-bold rounded-t-md bg-teal-300"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "12px", marginRight: "8px", marginTop: "2px" }}
              src="/icons/text.png"
              alt="text-logo"
            />
            <span>Send Message</span>
          </div>
          <img
            style={{ height: "12px" }}
            src="/icons/whatsapp.png"
            alt="text-logo"
          />
        </div>
        <div className="px-3 py-2 ">
          <div className="text-xs font-normal text-black truncate">
            {data.label ?? "Text Node"}
          </div>
        </div>
      </div>

      <Handle
        id="a"
        type="target"
        position={Position.Left}
        className="w-1 rounded-full bg-slate-500"
      />
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        className="w-1 rounded-full bg-gray-500"
      />
    </div>
  );
};

export default TextNode;
