import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';

describe('StudentController', () => {
  let controller: StudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
    }).compile();

    controller = module.get<StudentController>(StudentController);
  });

  it('This should be defined', () => {
    expect(controller).toBeDefined();
  });
});
