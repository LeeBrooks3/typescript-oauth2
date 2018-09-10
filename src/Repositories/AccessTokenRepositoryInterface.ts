import { Repository, ResponseInterface } from '@leebrooks3/typescript';
import ClientInterface from '../Http/Clients/ClientInterface';
import CreateClientTokenRequestInterface from '../Http/Requests/AccessToken/CreateClientTokenRequestInterface';
import CreateUserTokenRequestInterface from '../Http/Requests/AccessToken/CreateUserTokenRequestInterface';
import AccessToken from '../Models/AccessToken';
import AccessTokenInterface from '../Models/AccessTokenInterface';

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
