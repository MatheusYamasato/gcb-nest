import { Doctor } from './doctor.entity';

describe('Doctor', () => {
  it('should be defined', () => {
    expect(new Doctor()).toBeDefined();
  });
});
