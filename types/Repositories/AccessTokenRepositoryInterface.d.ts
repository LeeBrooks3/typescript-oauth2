import { Repository } from '@leebrooks3/typescript';
import AccessToken from '../Models/AccessToken';
export default interface AccessTokenRepositoryInterface extends Repository<AccessToken> {
    /**
     * Creates a new user access token.
     *
     * @param {string} username
     * @param {string} password
     * @param {string} scope
     * @return {Promise<AccessToken>}
     */
    createUserToken(username: string, password: string, scope?: string): Promise<AccessToken>;
    /**
     * Creates a new client access token.
     *
     * @param {string} scope
     * @return {Promise<AccessToken>}
     */
    createClientToken(scope?: string): Promise<AccessToken>;
}
//# sourceMappingURL=AccessTokenRepositoryInterface.d.ts.map