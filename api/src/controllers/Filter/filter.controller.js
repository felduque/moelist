export const filtersGeneral = async (req, res) => {
  const { type, status, demography } = req.query;
  console.log(type, status, demography);

  res.json("Enviado");
};
