import { Repository, ResponseInterface } from '@leebrooks3/typescript';
import ClientInterface from '../Http/Clients/ClientInterface';
import CreateClientTokenRequestInterface from '../Http/Requests/AccessToken/CreateClientTokenRequestInterface';
import CreateUserTokenRequestInterface from '../Http/Requests/AccessToken/CreateUserTokenRequestInterface';
import AccessToken from '../Models/AccessToken';
import AccessTokenInterface from '../Models/AccessTokenInterface';
import AccessTokenRepositoryInterface from './AccessTokenRepositoryInterface';

export default class AccessTokenRepository extends Repository<AccessToken> implements AccessTokenRepositoryInterface {
    protected client: ClientInterface;
    protected endpoint: string = 'oauth/token';

    /**
     * Sets the client instance and the endpoint.
     */
    public constructor(client: ClientInterface, endpoint?: string) {
        super(client);

        if (endpoint) {
            this.endpoint = endpoint;
        }
    }

    /** @inheritDoc */
    public async createUserToken(username: string, password: string, scope?: string): Promise<AccessToken> {
        const client: ClientInterface = this.getClient();
        const attributes: CreateUserTokenRequestInterface = {
            client_id: client.getClientId(),
            client_secret: client.getClientSecret(),
            grant_type: 'password',
            password,
            username,
        };

        if (scope) {
            attributes.scope = scope;
        }

        return this.create(attributes);
    }

    /** @inheritDoc */
    public async createClientToken(scope: string = ''): Promise<AccessToken> {
        const client: ClientInterface = this.getClient();
        const attributes: CreateClientTokenRequestInterface = {
            client_id: client.getClientId(),
            client_secret: client.getClientSecret(),
            grant_type: 'client_credentials',
        };

        if (scope) {
            attributes.scope = scope;
        }

        return this.create(attributes);
    }

    /**
     * Creates a new resource.
     *
     * @param {CreateClientTokenRequestInterface|CreateUserTokenRequestInterface} attributes
     * @return {Promise<AccessToken>}
     */
    protected async create(attributes: CreateClientTokenRequestInterface | CreateUserTokenRequestInterface): Promise<AccessToken> { // tslint:disable-line max-line-length
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const response: ResponseInterface = await client.post(endpoint, attributes);
        const payload: AccessTokenInterface = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    protected getClient(): ClientInterface {
        return this.client;
    }

    /** @inheritDoc */
    protected makeModel(attributes: AccessTokenInterface): AccessToken {
        return new AccessToken({
            accessToken: attributes.access_token,
            expiresIn: attributes.expires_in,
            refreshToken: attributes.refresh_token,
            tokenType: attributes.token_type,
        });
    }
}
