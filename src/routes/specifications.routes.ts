import { Request, Response, Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createSpecification = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecification.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/", (request: Request, response: Response) => {
  const specifications = specificationsRepository.list();

  return response.status(201).json(specifications);
});

export { specificationsRoutes };
