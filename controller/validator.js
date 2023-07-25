exports.getvalidation = async (req, res) => {
  // console.log("HERE IS THE URL of env", process.env.URL);
  const data = await fetch(process.env.URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log("Data==>", data);
      return data;
    })
    .catch((err) => {
      // console.log("Error==>", err);
      return null;
    });
  if (data) {
    res.status(200).json({
      success: true,
      data,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No data available",
    });
  }
};
