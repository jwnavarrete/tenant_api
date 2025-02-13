import express from "express";

declare global {
  namespace Express {
    interface Request {
      userTokenInfos: {
        email: string;
        id: string;
        tenantId: string;
        subdomain: string;
        type: string;
        exp: number;
        role: string;
        sub: string;
        // admin: boolean;
      };
    }    
  }
}
