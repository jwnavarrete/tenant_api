import express from "express";

declare global {
  namespace Express {
    interface Request {
      userTokenInfos: {
        email: string;
        id: string;
        admin: boolean;
      };
    }
  }
}
