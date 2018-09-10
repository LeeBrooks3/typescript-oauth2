import { Repository } from '@leebrooks3/typescript';
import ClientInterface from '../Http/Clients/ClientInterface';
import AccessToken from '../Models/AccessToken';
import UserRepositoryInterface from './UserRepositoryInterface';
export default abstract class UserRepository<User> extends Repository<User> implements UserRepositoryInterface<User> {
    protected client: ClientInterface;
    /**
     * @param {ClientInterface} client
     */
    constructor(client: ClientInterface);
    /**
     * Retrieve the user of the given access token.
     *
     * @param {AccessToken} token
     * @param {object} params
     * @return {Promise<User>>}
     */
    get(token: AccessToken, params?: object): Promise<User>;
    /** @inheritDoc */
    protected getClient(): ClientInterface;
}
//# sourceMappingURL=UserRepository.d.ts.map