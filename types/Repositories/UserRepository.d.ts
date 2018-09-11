import { ModelInterface, Repository } from '@leebrooks3/typescript';
import ClientInterface from '../Http/Clients/ClientInterface';
import AccessToken from '../Models/AccessToken';
import UserRepositoryInterface from './UserRepositoryInterface';
export default abstract class UserRepository<T = ModelInterface> extends Repository<T> implements UserRepositoryInterface<T> {
    protected client: ClientInterface;
    /**
     * Sets the client instance.
     */
    constructor(client: ClientInterface);
    /** @inheritDoc */
    get(token: AccessToken, params?: object): Promise<T>;
    /** @inheritDoc */
    protected getClient(): ClientInterface;
}
//# sourceMappingURL=UserRepository.d.ts.map