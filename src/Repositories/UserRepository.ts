import { Repository, ResponseInterface } from '@leebrooks3/typescript';
import ClientInterface from '../Http/Clients/ClientInterface';
import GetUserRequestInterface from '../Http/Requests/User/GetUserRequestInterface';
import AccessToken from '../Models/AccessToken';
import AccessTokenInterface from '../Models/AccessTokenInterface';
import UserRepositoryInterface from './UserRepositoryInterface';

export default abstract class UserRepository<User> extends Repository<User> implements UserRepositoryInterface<User> {
    protected client: ClientInterface;

    /**
     * @param {ClientInterface} client
     */
    public constructor(client: ClientInterface) {
        super(client);
    }

    /**
     * Retrieve the user of the given access token.
     *
     * @param {AccessToken} token
     * @param {object} params
     * @return {Promise<User>>}
     */
    public async get(token: AccessToken, params?: object): Promise<User> {
        const client: ClientInterface = this.getClient();
        const endpoint: string = this.getEndpoint();
        const request: GetUserRequestInterface = {
            headers: {
                Authorization: `${token.tokenType} ${token.accessToken}`,
            },
            ...params,
        };
        const response: ResponseInterface = await client.get(endpoint, request);
        const payload: AccessTokenInterface = this.getResponseData(response);

        return this.makeModel(payload);
    }

    /** @inheritDoc */
    protected getClient(): ClientInterface {
        return this.client;
    }
}
