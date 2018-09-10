import { Client as BaseClient } from '@leebrooks3/typescript';
import ClientInterface from './ClientInterface';
export default class Client extends BaseClient implements ClientInterface {
    /**
     * The oauth2 client id.
     *
     * @var {number}
     */
    protected readonly clientId: number;
    /**
     * The oauth2 client secret.
     *
     * @var {string}
     */
    protected readonly clientSecret: string;
    /**
     * @param {number} clientId
     * @param {string} clientSecret
     * @param {string} serverUrl
     */
    constructor(clientId: number, clientSecret: string, serverUrl: string);
    /**
     * Returns the oauth2 client id.
     *
     * @return {number}
     */
    getClientId(): number;
    /**
     * Returns oauth2 client secret.
     *
     * @return {number}
     */
    getClientSecret(): string;
}
//# sourceMappingURL=Client.d.ts.map