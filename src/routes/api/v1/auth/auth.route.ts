import { Router } from "express"
import { asyncHandler } from "../../../../core/asyncHandler.core"
import { validateDto } from "../../../../middlewares/validateDTO.middleware"
import AuthRepository from "../../../../repositories/auth/auth.repository"
import AuthService from "../../../../services/auth/auth.service"
import AuthController from "../../../../controllers/auth/auth.controller"
import { SignupUserRequest, LoginUserRequest } from "../../../../types/user.type";
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
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Signup user.
 *     description: Signup user for loggin.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - lastname
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/signup", asyncHandler(validateDto(SignupUserRequest)), asyncHandler(authController.signup_controller))

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - AUTH
 *     summary: Login user.
 *     description: Login API.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.post("/login", asyncHandler(validateDto(LoginUserRequest)), asyncHandler(authController.login_controller))


export default router