import { ClientInterface as BaseClientInterface } from '@leebrooks3/typescript';
export default interface ClientInterface extends BaseClientInterface {
    /**
     * Returns the oauth2 client id.
     */
    getClientId(): number;
    /**
     * Returns oauth2 client secret.
     */
    getClientSecret(): string;
}
//# sourceMappingURL=ClientInterface.d.ts.map