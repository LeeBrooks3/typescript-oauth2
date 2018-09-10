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
    public constructor(clientId: number, clientSecret: string, serverUrl: string) {
        super({
            baseURL: serverUrl,
        });

        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    /**
     * Returns the oauth2 client id.
     *
     * @return {number}
     */
    public getClientId(): number {
        return this.clientId;
    }

    /**
     * Returns oauth2 client secret.
     *
     * @return {number}
     */
    public getClientSecret(): string {
        return this.clientSecret;
    }
}
