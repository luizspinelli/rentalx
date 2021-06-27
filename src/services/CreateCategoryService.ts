import { Category } from "../model/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoryRepository) {}
  execute({ name, description }: IRequest): void {
    const existingCategory = this.categoriesRepository.findByName(name);

    if (existingCategory) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };