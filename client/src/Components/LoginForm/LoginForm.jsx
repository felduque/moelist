import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { validateLogin } from "../../Helper/Login/loginvalidate";
import Swal from "sweetalert2";
import { loginUser } from "../../Api/Login/login";

import "./LoginForm.css";

export const LoginForm = ({ setFormType }) => {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(
      validateLogin({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const newForm = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(newForm);
      // Se guarda el token en el localStorage
      localStorage.setItem("token", res.token);
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Usuario logueado con exito",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormType("login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al loguear el usuario",
          text: "El email ya esta registrado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Al parecer hay un error en el formulario, corrige los campos",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="input-group">
        <div className=" mb-4 input-field">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Escriba su Email"
            required
          />
          <MdEmail className="input-icon" />
        </div>
        {errors.email && (
          <div className="alert alert-danger" role="alert">
            {errors.email}
          </div>
        )}
      </div>

      <div className="input-group">
        <div className="mb-4 input-field">
          <input
            type={show ? "text" : "password"}
            name="password"
            onChange={handleChange}
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
        {errors.password && (
          <div className="alert alert-danger" role="alert">
            {errors.password}
          </div>
        )}
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
