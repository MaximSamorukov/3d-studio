export const POST = async (request: Request) => {
  const req = await request.formData();

  console.log(req);

  return Response.json({});
};
