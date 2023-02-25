import React from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { IoIosClose } from "react-icons/io";
import "./LoginRegisterModal.css";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const LoginRegisterModal = ({ formType, setFormType }) => {
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
            <IoIosClose
              type="button"
              className="btn p-0 text-white fs-1"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {formType === "login" ? (
            <LoginForm setFormType={setFormType} />
          ) : (
            <RegisterForm setFormType={setFormType} />
          )}
        </div>
      </div>
    </div>
  );
};
