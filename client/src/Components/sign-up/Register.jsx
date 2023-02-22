import React, { useState } from "react";
import style from "./Register.module.css";
import { RiCloseCircleLine } from "react-icons/ri";
export const Register = () => {
  const [modal, setModal] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     getPropertyByid(id).then((res) => {
  //       setData({
  //         title: res.data.title,
  //         description: res.data.description,
  //       });
  //     });
  //   }, [id]);

  //   console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModal = () => {
    if (modal === true) {
      setModal(false);
    }
  };

  if (!modal) return null;
  return (
    <form onSubmit={handleSubmit} className={style.modal_container_form}>
      <div className={style.modal_container_inputs}>
        <div className={style.content_modal_form_button}>
          <RiCloseCircleLine
            className={style.modal_container_form_close}
            onClick={handleModal}
          />
        </div>

        <div className={style.title_edit_content}>
          <label className="title is-5">Email</label>
          <p>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.description}
              type="email"
              name="email"
              className="input"
            />
          </p>
        </div>
        <div>
          <label className="title is-5">Contraseña</label>
          <input
            type="password"
            name="password"
            className="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="button is-success"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
};
