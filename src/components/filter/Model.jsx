import React, { useState } from "react";

const Model = ({ setSelectedModels, selectedModels, products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleModelChange = (model) => {
    setSelectedModels((prevModels) => {
      if (prevModels.includes(model)) {
        return prevModels.filter((name) => name !== model);
      } else {
        return [...prevModels, model];
      }
    });
  };

  const uniqueModels = Array.from(
    new Set(products?.map((product) => product.model))
  );

  return (
    <div className="p-4 bg-white shadow-2xl h-[180px] overflow-y-auto">
      <input
        type="text"
        placeholder="Search Model..."
        className="mb-4 p-1 border border-gray-300 rounded w-[180px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {uniqueModels
          .filter((model) =>
            model.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((uniqueModel) => (
            <div key={uniqueModel} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedModels.includes(uniqueModel)}
                  onChange={() => handleModelChange(uniqueModel)}
                />
                {uniqueModel}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Model;
