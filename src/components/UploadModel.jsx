import React, { useState } from "react";
import "../css/uploadModel.css";

const UploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="upload-overlay">
      <div className="upload-modal">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Title */}
        <h2 className="modal-title">Editor</h2>

        {/* Content */}
        {!file ? (
          <div className="upload-content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1087/1087840.png"
              alt="Upload"
              className="upload-illustration"
            />
            <h3>Select files to begin</h3>
            <p>Share images or a single video in your post.</p>

            <label className="upload-btn">
              Upload from computer
              <input type="file" hidden onChange={handleFileChange} />
            </label>
          </div>
        ) : (
          <div className="file-preview">
            <p>Selected File: {file.name}</p>
            <button className="next-btn">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModal;
