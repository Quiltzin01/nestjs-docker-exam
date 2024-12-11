import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(user: Partial<User>): Promise<User> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  update(id: string, user: Partial<User>): Promise<void> {
    return this.userRepository.update(id, user).then(() => {});
  }

  remove(id: string): Promise<void> {
    return this.userRepository.delete(id).then(() => {});
  }
}
