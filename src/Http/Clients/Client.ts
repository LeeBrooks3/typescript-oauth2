import { Client as BaseClient } from '@leebrooks3/typescript';
import ClientInterface from './ClientInterface';

export default class Client extends BaseClient implements ClientInterface {
    /**
     * The oauth2 client id.
     */
    protected readonly clientId: number;

    /**
     * The oauth2 client secret.
     */
    protected readonly clientSecret: string;

    /**
     * Sets the client id & secret and configures the clients base url.
     */
    public constructor(clientId: number, clientSecret: string, serverUrl: string) {
        super({
            baseURL: serverUrl,
        });

        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    /** @inheritDoc */
    public getClientId(): number {
        return this.clientId;
    }

    /** @inheritDoc */
    public getClientSecret(): string {
        return this.clientSecret;
    }
}
