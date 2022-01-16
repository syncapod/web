// @generated by protobuf-ts 2.2.1 with parameter long_type_string,generate_dependencies
// @generated from protobuf file "user.proto" (package "protos", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * @generated from protobuf message protos.User
 */
export interface User {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
    /**
     * @generated from protobuf field: string username = 3;
     */
    username: string;
    /**
     * string password = 4;
     *
     * @generated from protobuf field: google.protobuf.Timestamp DOB = 5 [json_name = "DOB"];
     */
    dOB?: Timestamp;
}
/**
 * @generated from protobuf message protos.Subscription
 */
export interface Subscription {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string userID = 2;
     */
    userID: string;
    /**
     * @generated from protobuf field: string podcastID = 3;
     */
    podcastID: string;
    /**
     * @generated from protobuf field: repeated string completedIDs = 4;
     */
    completedIDs: string[];
    /**
     * @generated from protobuf field: repeated string inProgressIDs = 5;
     */
    inProgressIDs: string[];
}
/**
 * @generated from protobuf message protos.UserEpisode
 */
export interface UserEpisode {
    /**
     * @generated from protobuf field: string userID = 1;
     */
    userID: string;
    /**
     * @generated from protobuf field: string episodeID = 2;
     */
    episodeID: string;
    /**
     * @generated from protobuf field: int64 offset = 3;
     */
    offset: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp lastSeen = 4;
     */
    lastSeen?: Timestamp;
    /**
     * @generated from protobuf field: bool played = 5;
     */
    played: boolean;
}
/**
 * @generated from protobuf message protos.Session
 */
export interface Session {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string userID = 2;
     */
    userID: string;
    /**
     * @generated from protobuf field: string sessionKey = 3;
     */
    sessionKey: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp loginTime = 4;
     */
    loginTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp lastSeenTime = 5;
     */
    lastSeenTime?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expires = 6;
     */
    expires?: Timestamp;
    /**
     * @generated from protobuf field: string userAgent = 7;
     */
    userAgent: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends MessageType<User> {
    constructor() {
        super("protos.User", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "DOB", kind: "message", jsonName: "DOB", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<User>): User {
        const message = { id: "", email: "", username: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<User>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string email */ 2:
                    message.email = reader.string();
                    break;
                case /* string username */ 3:
                    message.username = reader.string();
                    break;
                case /* google.protobuf.Timestamp DOB = 5 [json_name = "DOB"];*/ 5:
                    message.dOB = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.dOB);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string email = 2; */
        if (message.email !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.email);
        /* string username = 3; */
        if (message.username !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.username);
        /* google.protobuf.Timestamp DOB = 5 [json_name = "DOB"]; */
        if (message.dOB)
            Timestamp.internalBinaryWrite(message.dOB, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.User
 */
export const User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Subscription$Type extends MessageType<Subscription> {
    constructor() {
        super("protos.Subscription", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "userID", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "podcastID", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "completedIDs", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "inProgressIDs", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Subscription>): Subscription {
        const message = { id: "", userID: "", podcastID: "", completedIDs: [], inProgressIDs: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Subscription>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Subscription): Subscription {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string userID */ 2:
                    message.userID = reader.string();
                    break;
                case /* string podcastID */ 3:
                    message.podcastID = reader.string();
                    break;
                case /* repeated string completedIDs */ 4:
                    message.completedIDs.push(reader.string());
                    break;
                case /* repeated string inProgressIDs */ 5:
                    message.inProgressIDs.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Subscription, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string userID = 2; */
        if (message.userID !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.userID);
        /* string podcastID = 3; */
        if (message.podcastID !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.podcastID);
        /* repeated string completedIDs = 4; */
        for (let i = 0; i < message.completedIDs.length; i++)
            writer.tag(4, WireType.LengthDelimited).string(message.completedIDs[i]);
        /* repeated string inProgressIDs = 5; */
        for (let i = 0; i < message.inProgressIDs.length; i++)
            writer.tag(5, WireType.LengthDelimited).string(message.inProgressIDs[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.Subscription
 */
export const Subscription = new Subscription$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserEpisode$Type extends MessageType<UserEpisode> {
    constructor() {
        super("protos.UserEpisode", [
            { no: 1, name: "userID", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "episodeID", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "offset", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "lastSeen", kind: "message", T: () => Timestamp },
            { no: 5, name: "played", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<UserEpisode>): UserEpisode {
        const message = { userID: "", episodeID: "", offset: "0", played: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserEpisode>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserEpisode): UserEpisode {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string userID */ 1:
                    message.userID = reader.string();
                    break;
                case /* string episodeID */ 2:
                    message.episodeID = reader.string();
                    break;
                case /* int64 offset */ 3:
                    message.offset = reader.int64().toString();
                    break;
                case /* google.protobuf.Timestamp lastSeen */ 4:
                    message.lastSeen = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastSeen);
                    break;
                case /* bool played */ 5:
                    message.played = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserEpisode, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string userID = 1; */
        if (message.userID !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userID);
        /* string episodeID = 2; */
        if (message.episodeID !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.episodeID);
        /* int64 offset = 3; */
        if (message.offset !== "0")
            writer.tag(3, WireType.Varint).int64(message.offset);
        /* google.protobuf.Timestamp lastSeen = 4; */
        if (message.lastSeen)
            Timestamp.internalBinaryWrite(message.lastSeen, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* bool played = 5; */
        if (message.played !== false)
            writer.tag(5, WireType.Varint).bool(message.played);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.UserEpisode
 */
export const UserEpisode = new UserEpisode$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Session$Type extends MessageType<Session> {
    constructor() {
        super("protos.Session", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "userID", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "sessionKey", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "loginTime", kind: "message", T: () => Timestamp },
            { no: 5, name: "lastSeenTime", kind: "message", T: () => Timestamp },
            { no: 6, name: "expires", kind: "message", T: () => Timestamp },
            { no: 7, name: "userAgent", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Session>): Session {
        const message = { id: "", userID: "", sessionKey: "", userAgent: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Session>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Session): Session {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string userID */ 2:
                    message.userID = reader.string();
                    break;
                case /* string sessionKey */ 3:
                    message.sessionKey = reader.string();
                    break;
                case /* google.protobuf.Timestamp loginTime */ 4:
                    message.loginTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.loginTime);
                    break;
                case /* google.protobuf.Timestamp lastSeenTime */ 5:
                    message.lastSeenTime = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastSeenTime);
                    break;
                case /* google.protobuf.Timestamp expires */ 6:
                    message.expires = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expires);
                    break;
                case /* string userAgent */ 7:
                    message.userAgent = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Session, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string userID = 2; */
        if (message.userID !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.userID);
        /* string sessionKey = 3; */
        if (message.sessionKey !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.sessionKey);
        /* google.protobuf.Timestamp loginTime = 4; */
        if (message.loginTime)
            Timestamp.internalBinaryWrite(message.loginTime, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp lastSeenTime = 5; */
        if (message.lastSeenTime)
            Timestamp.internalBinaryWrite(message.lastSeenTime, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp expires = 6; */
        if (message.expires)
            Timestamp.internalBinaryWrite(message.expires, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* string userAgent = 7; */
        if (message.userAgent !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.userAgent);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message protos.Session
 */
export const Session = new Session$Type();
