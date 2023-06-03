import React from "react";

const NodePanel = ({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
}) => {
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r-2 border-blue-200 p-4 text-sm bg-gray-200 w-64 h-screen text-black">
      {selectedNode ? (
        //update node messages
        <div>
          <h3 className="text-xl mb-2 text-gray-900">Message</h3>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Text:
          </label>
          <textarea
            type="text"
            className="block w-full pt-2 px-3 pb-3 text-gray-700 border border-gray-400 rounded-lg bg-white focus:outline-none focus:border-blue-500"
            value={nodeName}
            onChange={handleInputChange}
          />
          <button
            className="mt-4 text-gray-600 rounded hover:text-gray-900"
            onClick={() => setSelectedElements([])}
          >
            Back
          </button>
        </div>
      ) : (
        //node message panel
        <>
          <div
            className="bg-white px-3 py-6 border-2 border-gray-700 rounded cursor-move flex justify-center items-center text-gray-700"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            <img
              style={{ height: "18px", marginRight: "8px", marginTop: "2px" }}
              src="/icons/text.png"
              alt="text-logo"
            />
            <span>Message</span>
          </div>
        </>
      )}
    </aside>
  );
};

export default NodePanel;
