import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    signinLocal(dto: AuthDto): string;
    signUser(userId: number, email: string, type: string): string;
}
