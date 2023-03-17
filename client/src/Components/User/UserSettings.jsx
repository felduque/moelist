import React, { useState, useContext, useEffect } from "react";
import { BsPaypal, BsTwitter } from "react-icons/bs";
import { SiBinance } from "react-icons/si";
import { RiImageAddFill } from "react-icons/ri";
import { FaUserAlt, FaSave } from "react-icons/fa";
import "./UserStyles.css";
import { AuthContext } from "../../utils/context/AuthContext";
import { validateUserSettings } from "../../helpers/Validations/ValidateUserSettings";
import Swal from "sweetalert2";
import { updateUser } from "../../Api/User/user";
import { FileUploader } from "react-drag-drop-files";
import { fileTypes } from "../../helpers/Validations/allowedFileTypes";

export const UserSettings = () => {
  const { user } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState();
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState({ ...user });

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validateUserSettings(data));
  };

  const handleImage = (image) => {
    const reader = new FileReader();
    setData({ ...data, image });
    reader.onloadend = () => {
      setPreview(reader.result?.toString());
    };

    reader.readAsDataURL(image);
  };

  const editUser = () => {
    setTimeout(() => {
      setSubmitting(false);
      updateUser(user.id, data);
      Swal.fire({
        icon: "success",
        title: "Ha actualizado su perfil correctamente",
      });
      window.location.reload();
    }, 1500);
  };

  useEffect(() => {
    if (errors && submitting) {
      if (Object.keys(errors).length === 0) {
        editUser();
      } else {
        setSubmitting(false);
      }
    }
  }, [submitting]);

  return (
    <form className="row user-form" onSubmit={handleSubmit}>
      <h1 className="mb-3">Configuración de Usuario</h1>

      {user?.role === "Author" && (
        <div className="col-12 mb-5">
          <label className="mb-2" htmlFor="">
            Imagen
          </label>
          <FileUploader
            multiple={false}
            classes="drop-zone"
            maxSize={1}
            handleChange={(file) => handleImage(file)}
            children={
              <>
                {preview ? (
                  <img src={preview} />
                ) : (
                  <>
                    <RiImageAddFill className="fs-1" />
                    <span className="fs-3 fw-semibold">
                      Arrasta una imagen aca!
                    </span>
                  </>
                )}
              </>
            }
            name="image"
            label="Arrastra una imagen aqui"
            types={fileTypes}
          />
          {errors?.image && (
            <span className="text-danger mt-2 d-block">{errors?.image}</span>
          )}
        </div>
      )}

      <div className="col-md-6">
        <div className="input-group">
          <div className="input-group-text">
            <BsPaypal />
          </div>
          <input
            placeholder="Ingrese su email de Paypal"
            type="email"
            value={data?.paypal}
            name="paypal"
            className="form-control"
            onChange={(e) => setData({ ...data, paypal: e.target.value })}
          />
        </div>
        {errors?.paypal && (
          <span className="text-danger mt-2 d-block">{errors?.paypal}</span>
        )}
      </div>

      <div className="col-md-6">
        <div className="input-group">
          <div className="input-group-text">
            <SiBinance />
          </div>
          <input
            type="text"
            value={data?.binanceId}
            onChange={(e) => setData({ ...data, binanceId: e.target.value })}
            placeholder="Pay Id de Binance"
            className="form-control"
          />
        </div>
        {errors?.binanceId && (
          <span className="text-danger mt-2 d-block">{errors?.binanceId}</span>
        )}
      </div>

      <div className="col-md-6">
        <div className="input-group">
          <div className="input-group-text">
            <BsTwitter />
          </div>
          <input
            type="text"
            placeholder="Nombre de usuario usado en twitter"
            className="form-control"
            value={data?.twitter}
            onChange={(e) => setData({ ...data, twitter: e.target.value })}
          />
        </div>
        {errors?.twitter && (
          <span className="text-danger mt-2 d-block">{errors?.twitter}</span>
        )}
      </div>

      <div className="col-md-6">
        <div className="input-group">
          <div className="input-group-text">
            <FaUserAlt />
          </div>
          <input
            type="text"
            placeholder="Nombre de usuario en moelist"
            className="form-control"
            value={data?.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
          />
        </div>
        {errors?.userName && (
          <span className="text-danger mt-2 d-block">{errors?.userName}</span>
        )}
      </div>

      <div className="col">
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          Editar
          {!submitting ? (
            <FaSave className="ms-2 fs-5 button-icon" />
          ) : (
            <div className="button-icon">
              <div
                className="spinner-border ms-2"
                role="status"
                style={{ width: "15px", height: "15px" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </button>
      </div>
    </form>
  );
};
