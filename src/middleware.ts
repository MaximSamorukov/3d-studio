import { auth } from "@/auth";

import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const s = await auth();
  if (!s?.user) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  NextResponse.next();
};
export const config = {
  matcher: ["/crm/dashboard"],
};
