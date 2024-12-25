import { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user?: string | JwtPayload; // Match the type returned by `jwt.verify`
        }
    }
}
