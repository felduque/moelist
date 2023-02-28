import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { BiHide, BiShow } from "react-icons/bi";
import { registerUser } from "../../Api/Register/register";
import { validateRegister } from "../../Helper/Register/registervalidate";
import Swal from "sweetalert2";

export const RegisterForm = ({ setFormType }) => {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors(
      validateRegister({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      const newForm = {
        userName: data.userName,
        email: data.email,
        password: data.password,
      };
      const res = await registerUser(newForm);
      if (res) {
        Swal.fire({
          icon: "success",
          title: "Usuario registrado con exito",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormType("login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrar el usuario",
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
        <div className="mb-4 input-field">
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="Escribe tu Nick"
          />
          <FaUserAlt className="input-icon" />
        </div>
        {errors.email && <p className="error">{errors.userName}</p>}
      </div>

      <div className="input-group">
        <div className="mb-4 input-field">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Escriba su Email"
          />
          <MdEmail className="input-icon" />
        </div>

        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input-group">
        <div className="mb-4 input-field">
          <input
            onChange={handleChange}
            type={show ? "text" : "password"}
            name="password"
            placeholder="Escriba su Contraseña"
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
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="input-group">
        <div className="mb-4 input-field">
          <input
            onChange={handleChange}
            type={show ? "text" : "password"}
            name="passwordConfirm"
            placeholder="Confirmar Contraseña"
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
        {errors.passwordConfirm && (
          <p className="error">{errors.passwordConfirm}</p>
        )}
      </div>

      <input
        className="btn btn-primary submit-btn w-100 fs-5 fw-bold"
        type="submit"
        value="Registro"
      />

      <p className="mt-4">
        Ya tiene una Cuenta?
        <button
          type="button"
          className="btn btn-link p-0 ps-1"
          onClick={() => setFormType("login")}
        >
          logeate!!
        </button>
      </p>
    </form>
  );
};
