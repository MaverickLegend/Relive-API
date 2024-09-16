import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly service: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // Desescructuramos el password del objeto createUserDto y copiamos todo el resto de la data
      const { password, ...userData } = createUserDto;
      // Creamos un nuevo usuario con la data desestructurada y hasheamos la contraseña
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      // Guardamos el usuario en la base de datos
      await this.userRepository.save(user);
      delete user.password;
      return {
        ...user,
        token: this.getJwtToken({ id: user.id }),
      };
    } catch (error) {
      this.handleDBError(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      // Desestructuramos el email y password del objeto loginUserDto
      const { password, email } = loginUserDto;
      // Buscamos un usuario con el email proporcionado
      const user = await this.userRepository.findOne({
        where: { email },
        // Solo seleccionamos el email, password e id del usuario
        select: { email: true, password: true, id: true },
      });
      // Si no encontramos un usuario con el email proporcionado lanzamos un UnauthorizedException
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      // Comparamos la contraseña proporcionada con la contraseña hasheada en la base de datos
      if (!bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedException('Invalid credentials');
      }
      // Si las contraseñas coinciden, eliminamos la contraseña del objeto user y retornamos el usuario con un token JWT
      return {
        ...user,
        // Generamos un token JWT con el id del usuario
        token: this.getJwtToken({ id: user.id }),
      };
    } catch (error) {
      this.handleDBError(error);
    }
  }

  async checkAuthStatus(user: User) {
    return {
      ...user,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  private getJwtToken(payload: JwtPayload) {
    // Generamos un token JWT con el payload proporcionado
    const token = this.service.sign(payload);
    return token;
  }

  private handleDBError(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}
