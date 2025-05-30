export const POST = async (request: Request) => {
  const req = await request.formData();

  const calculation = {
    weight: 254,
    plasticType: req.get("plasticType"),
    volume: 25,
    printTime: 135,
    price: 800,
  };
  console.log(req);
  return Response.json(calculation);
};
