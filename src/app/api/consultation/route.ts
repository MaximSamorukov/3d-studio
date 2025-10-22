export const POST = async (request: Request) => {
  const req = await request.formData();

  console.log("route", req, request);

  return Response.json({ consultation: true });
};
