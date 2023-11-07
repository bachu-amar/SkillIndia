import {type, register,
    getbookId } from "@/controllers/ticket_type.controller";
import { Router } from "express";


const router = Router();

router.post("/type",type )

router.post("/register", register)

router.get("/bookings/:userId", getbookId)

export default router;