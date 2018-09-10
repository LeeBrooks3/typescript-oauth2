import { Model } from '@leebrooks3/typescript';
export default class AccessToken extends Model {
    accessToken: string;
    refreshToken?: string;
    tokenType: string;
    expiresIn?: number;
}
//# sourceMappingURL=AccessToken.d.ts.map