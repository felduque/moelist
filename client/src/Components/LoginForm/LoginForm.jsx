import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

import "./LoginForm.css";

export const LoginForm = ({ setFormType }) => {
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4 input-field">
        <input type="email" placeholder="Escriba su Email" required />
        <MdEmail className="input-icon" />
      </div>

      <div className="mb-4 input-field">
        <input
          type={show ? "text" : "password"}
          placeholder="Escriba su Contraseña"
          required
        />
        <FaLock className="input-icon" />
        <div className="showHide" onClick={() => setShow(!show)}>
          {show ? (
            <BiShow className="input-icon show-hide-pw" />
          ) : (
            <BiHide className="input-icon show-hide-pw" />
          )}
        </div>
      </div>

      <input
        className="btn btn-primary submit-btn w-100 fs-5 fw-bold"
        type="submit"
        value="Login"
      />

      <p className="mt-4">
        No tiene una Cuenta?
        <button
          type="button"
          className="btn btn-link p-0 ps-1"
          onClick={() => setFormType("registro")}
        >
          Create una!!
        </button>
      </p>
    </form>
  );
};
