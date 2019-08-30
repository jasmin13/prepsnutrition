import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

export function initSwagger(app) {
  const swaggerDefinition = {
    info: {
      title: "Preps Nutrition",
      version: "1.0.0"
    },
    host: "localhost:3001",
    basePath: "/"
  };

  const options = {
    swaggerDefinition,
    apis: [path.resolve(__dirname, "../api/**/*.controller.js")]
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.get("/docs", (req, res) => {
    res.sendFile(path.join(__dirname, "redoc.html"));
  });

  app.get("/docs/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
