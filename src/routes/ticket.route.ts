import { booking } from "@/controllers/ticket.controller";
import { Router } from "express";


const router = Router();

router.post("/booking", booking)


export default router;
