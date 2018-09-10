import { Repository } from '@leebrooks3/typescript';
import ClientInterface from '../Http/Clients/ClientInterface';
import CreateClientTokenRequestInterface from '../Http/Requests/AccessToken/CreateClientTokenRequestInterface';
import CreateUserTokenRequestInterface from '../Http/Requests/AccessToken/CreateUserTokenRequestInterface';
import AccessToken from '../Models/AccessToken';
import AccessTokenInterface from '../Models/AccessTokenInterface';
import AccessTokenRepositoryInterface from './AccessTokenRepositoryInterface';
export default class AccessTokenRepository extends Repository<AccessToken> implements AccessTokenRepositoryInterface {
    protected client: ClientInterface;
    protected endpoint: string;
    /**
     * @param {ClientInterface} client
     * @param {string} endpoint
     */
    constructor(client: ClientInterface, endpoint?: string);
    /** @inheritDoc */
    createUserToken(username: string, password: string, scope?: string): Promise<AccessToken>;
    /** @inheritDoc */
    createClientToken(scope?: string): Promise<AccessToken>;
    /**
     * Creates a new resource.
     *
     * @param {CreateClientTokenRequestInterface|CreateUserTokenRequestInterface} attributes
     * @return {Promise<AccessToken>}
     */
    protected create(attributes: CreateClientTokenRequestInterface | CreateUserTokenRequestInterface): Promise<AccessToken>;
    /** @inheritDoc */
    protected getClient(): ClientInterface;
    /** @inheritDoc */
    protected makeModel(attributes: AccessTokenInterface): AccessToken;
}
//# sourceMappingURL=AccessTokenRepository.d.ts.map