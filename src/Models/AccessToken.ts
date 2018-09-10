import { Model } from '@leebrooks3/typescript';

export default class AccessToken extends Model {
    public accessToken: string;
    public refreshToken?: string;
    public tokenType: string;
    public expiresIn?: number;
}
