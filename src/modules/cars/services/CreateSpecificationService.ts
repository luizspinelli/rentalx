import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const existingSpecification =
      this.specificationsRepository.findByName(name);

    if (existingSpecification) {
      throw new Error("Specification already exists");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
