import { Repository } from '@leebrooks3/typescript';
import AccessToken from '../Models/AccessToken';

export default interface UserRepositoryInterface<User> extends Repository<User> {
    /**
     * Retrieve the user of the given access token.
     *
     * @param {AccessToken} token
     * @param {object} params
     * @return {Promise<User>>}
     */
    get(token: AccessToken, params?: object): Promise<User>;
}
