import { create } from "./contact.services";

export function initContact(app) {
  /**
   * @swagger
   * /contact:
   *   post:
   *     tags:
   *        - contact
   *     summary: contact
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               phone:
   *                   type: string
   *               query:
   *                   type: string
   *
   *     responses:
   *       403:
   *        description: There is some problem in submit your query.
   *       200:
   *        description: Thank you for contacting us.We will get back to you soon!
   */
  app.post("/contact", async (req, res) => {
    try {
      await create(req.body);
      return res.status(200).json({
        message: "Thank you for contacting us. We will get back to you soon!"
      });
    } catch (err) {
      return res.status(403).json({
        message: err
      });
    }
  });
}
