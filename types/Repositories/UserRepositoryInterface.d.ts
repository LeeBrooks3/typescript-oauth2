import { Repository } from '@leebrooks3/typescript';
import AccessToken from '../Models/AccessToken';
export default interface UserRepositoryInterface<T> extends Repository<T> {
    /**
     * Retrieve the user of the given access token.
     */
    get(token: AccessToken, params?: object): Promise<T>;
}
//# sourceMappingURL=UserRepositoryInterface.d.ts.map