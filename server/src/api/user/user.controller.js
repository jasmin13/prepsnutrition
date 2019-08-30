import passport from "passport";
import { findUser, saveUser } from "./user.services";

export function initUser(app) {
  /**
   * @swagger
   * /login:
   *   post:
   *     tags:
   *        - user
   *     summary: Login
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                   type: string
   *     responses:
   *       200
   */
  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.sendStatus(200);
  });

  /**
   * @swagger
   * /signUp:
   *   post:
   *     tags:
   *        - user
   *     summary: SignUp
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                   type: string
   *               firstName:
   *                   type: string
   *               lastName:
   *                   type: string
   *               phone:
   *                   type: string
   *     responses:
   *       403:
   *        description: User with such email already exist
   *       200:
   *        description: User successfully registered
   */
  app.post("/signUp", async (req, res) => {
    console.log(req.body);
    // const {email, firstName, lastName, password, phone} = req.body;
    // const user = await findUser({email});
    // if (user) {
    //   return res.status(403).send('User with such email already exist');
    // }
    // await saveUser({email, firstName, lastName, password, phone});
    // res.sendStatus(200);
  });

  /**
   * @swagger
   * /logout:
   *   post:
   *     tags:
   *        - user
   *     summary: Logout
   *     responses:
   *       200:
   *        description: successfully logout
   */
  app.post("/logout", async (req, res) => {
    req.logout();
    res.sendStatus(200);
  });

  /**
   * @swagger
   * /profile:
   *   get:
   *     tags:
   *        - user
   *     summary: User Profile
   *     responses:
   *       200:
   *        description: user profile
   *        schema:
   *              type: object
   *              properties:
   *                email:
   *                  type: string
   *                firstName:
   *                  type: string
   *                lastName:
   *                  type: string
   *                phone:
   *                  type: string
   *       401:
   *        description: user unauthorized
   */
  app.post("/profile", passport.authenticate("local"), async (req, res) => {
    const { user } = req;
    res.send(user);
  });
}
