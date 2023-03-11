import React, { useRef } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { IoIosClose } from "react-icons/io";
import "./LoginRegisterModal.css";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const LoginRegisterModal = ({ formType, setFormType }) => {
  const modalRef = useRef(null);
  return (
    <div
      className="modal fade"
      id="modal"
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div className="modal-dialog bg-dark">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header ">
            <h5 className="modal-title fs-2 form-title">{formType}</h5>
            <button
              ref={modalRef}
              className="btn p-0 text-white fs-1"
              id="modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <IoIosClose />
            </button>
          </div>
          {formType === "login" ? (
            <LoginForm setFormType={setFormType} modalRef={modalRef} />
          ) : (
            <RegisterForm setFormType={setFormType} />
          )}
        </div>
      </div>
    </div>
  );
};
