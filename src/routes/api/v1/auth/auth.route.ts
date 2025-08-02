import { Router } from "express"
import { asyncHandler } from "../../../../core/asyncHandler.core"
import AuthRepository from "../../../../repositories/auth/auth.repository"
import AuthService from "../../../../services/auth/auth.service"
import AuthController from "../../../../controllers/auth/auth.controller"
const router = Router()

/* ---------------------------- SETUP REPOSITORY ---------------------------- */
const authRepository = new AuthRepository()
/* ----------------------------- SETUP SERVICES ----------------------------- */
const authService = new AuthService(authRepository)
/* ---------------------------- SETUP CONTROLLER ---------------------------- */
const authController = new AuthController(authService)


/* -------------------------------------------------------------------------- */
/*                            Prefix: /api/v1/auth/                           */
/* -------------------------------------------------------------------------- */

router.post("/signup", asyncHandler(authController.signup_controller))
router.post("/login", asyncHandler(authController.login_controller))


export default router