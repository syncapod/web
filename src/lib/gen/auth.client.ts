// @generated by protobuf-ts 2.1.0 with parameter long_type_string,generate_dependencies
// @generated from protobuf file "auth.proto" (package "protos", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Auth } from "./auth";
import type { LogoutRes } from "./auth";
import type { LogoutReq } from "./auth";
import type { AuthenticateRes } from "./auth";
import type { AuthenticateReq } from "./auth";
import type { ResetPasswordRes } from "./auth";
import type { ResetPasswordReq } from "./auth";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CreateAccountRes } from "./auth";
import type { CreateAccountReq } from "./auth";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service protos.Auth
 */
export interface IAuthClient {
    /**
     * @generated from protobuf rpc: CreateAccount(protos.CreateAccountReq) returns (protos.CreateAccountRes);
     */
    createAccount(input: CreateAccountReq, options?: RpcOptions): UnaryCall<CreateAccountReq, CreateAccountRes>;
    /**
     * @generated from protobuf rpc: ResetPassword(protos.ResetPasswordReq) returns (protos.ResetPasswordRes);
     */
    resetPassword(input: ResetPasswordReq, options?: RpcOptions): UnaryCall<ResetPasswordReq, ResetPasswordRes>;
    /**
     * @generated from protobuf rpc: Authenticate(protos.AuthenticateReq) returns (protos.AuthenticateRes);
     */
    authenticate(input: AuthenticateReq, options?: RpcOptions): UnaryCall<AuthenticateReq, AuthenticateRes>;
    // 	option (google.api.http) = { 

    // 		post: "/v1/auth/authorize" 

    // 		body: "*" 

    // 	}; 

    /**
     * }
     *
     * @generated from protobuf rpc: Logout(protos.LogoutReq) returns (protos.LogoutRes);
     */
    logout(input: LogoutReq, options?: RpcOptions): UnaryCall<LogoutReq, LogoutRes>;
}
/**
 * @generated from protobuf service protos.Auth
 */
export class AuthClient implements IAuthClient, ServiceInfo {
    typeName = Auth.typeName;
    methods = Auth.methods;
    options = Auth.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: CreateAccount(protos.CreateAccountReq) returns (protos.CreateAccountRes);
     */
    createAccount(input: CreateAccountReq, options?: RpcOptions): UnaryCall<CreateAccountReq, CreateAccountRes> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateAccountReq, CreateAccountRes>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ResetPassword(protos.ResetPasswordReq) returns (protos.ResetPasswordRes);
     */
    resetPassword(input: ResetPasswordReq, options?: RpcOptions): UnaryCall<ResetPasswordReq, ResetPasswordRes> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ResetPasswordReq, ResetPasswordRes>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Authenticate(protos.AuthenticateReq) returns (protos.AuthenticateRes);
     */
    authenticate(input: AuthenticateReq, options?: RpcOptions): UnaryCall<AuthenticateReq, AuthenticateRes> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<AuthenticateReq, AuthenticateRes>("unary", this._transport, method, opt, input);
    }
    // 	option (google.api.http) = { 

    // 		post: "/v1/auth/authorize" 

    // 		body: "*" 

    // 	}; 

    /**
     * }
     *
     * @generated from protobuf rpc: Logout(protos.LogoutReq) returns (protos.LogoutRes);
     */
    logout(input: LogoutReq, options?: RpcOptions): UnaryCall<LogoutReq, LogoutRes> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<LogoutReq, LogoutRes>("unary", this._transport, method, opt, input);
    }
}
