import { Request, Response, Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const existingCategory = categoriesRepository.findByName(name);

  if (existingCategory) {
    return response.status(400).json({ error: "Category already exists" });
  }

  const category = categoriesRepository.create({ name, description });

  return response.status(201).json(category);
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const categories = categoriesRepository.list();

  return response.status(201).json(categories);
});

export { categoriesRoutes };
