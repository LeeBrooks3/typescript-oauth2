import { Repository } from '@leebrooks3/typescript';
import AccessToken from '../Models/AccessToken';
export default interface AccessTokenRepositoryInterface extends Repository<AccessToken> {
    /**
     * Creates a new user access token.
     */
    createUserToken(username: string, password: string, scope?: string): Promise<AccessToken>;
    /**
     * Creates a new client access token.
     */
    createClientToken(scope?: string): Promise<AccessToken>;
}
//# sourceMappingURL=AccessTokenRepositoryInterface.d.ts.map